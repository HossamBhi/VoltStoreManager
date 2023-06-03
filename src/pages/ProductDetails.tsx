import React, {useState} from 'react';
import {
  View,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  Alert,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {t} from 'i18next';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';

import {ProductDetailsScreenProps} from '../navigation/types';
import PageHeader from '../components/pageHeader';
import {
  getProductTypes,
  getStockType,
  smallCatProp,
  uplaodedImageProps,
} from '../utils/types';
import CustomeTextInputWithHeader from '../components/common/CustomeTextInputWithHeader';
import CustomePicker from '../components/picker/CustomePicker';
import {
  createProductAPI,
  deleteProductAPI,
  uploadImageApi,
} from '../utils/APIs';
import {RootState} from '../redux/store';
import CheckBoxWithText from '../components/common/CheckBoxWithText';
import Collapse from '../components/common/Collapse';
import RowComponent from '../components/common/RowComponent';
import CustomeTitle from '../components/common/CustomeTitle';
import BlockBtn from '../components/common/BlockBtn';
import {pickImageLibrary} from '../utils/helper';
import PickImage from '../components/product/PickImage';
import AppLoader from '../components/common/AppLoader';
import Icon from '../components/pageHeader/Icon';
import ConfirmationModal from '../components/popup/ConfirmationModal';
import Categories from '../components/product/Categories';
import CustomeRichText from '../components/product/CustomeRichText';
import AttributesSection from '../components/product/AttributesSection';

interface ProductFields {
  name: string;
  type: string;
  regular_price: string;
  description: string;
  short_description: string;
  featured_image: {src: string} | null;
  gallery_images: [{src: string}] | null;
  categories: string[] | [] | {id: number; name: string; slug: string}[];
  sale_price: string;
  in_stock: boolean;
  sku?: string;
  stock_quantity: number | null;
  weight?: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  seoTitle?: '';
  seoDes?: '';
}
const PRODUCT_TYPES = getProductTypes();
const STOCK_TYPE = getStockType(); // in_stock boolean

const ProductDetails = ({route, navigation}: ProductDetailsScreenProps) => {
  const {width} = useWindowDimensions();
  const [loader, setLoader] = useState(false);
  const product = route.params?.product || {
    manage_stock: false,
    images: [],
    id: undefined,
    categories: [],
  };
  const [manage_stock, setmanage_stock] = useState(
    product?.manage_stock || false,
  );
  const [images, setImages] = useState<uplaodedImageProps[]>(
    product?.images as never,
  );
  const {logedUser} = useSelector((state: RootState) => state.user);
  const {colors} = useTheme();
  const {height} = useWindowDimensions();
  const [selectedValue, setSelectedValue] = useState(PRODUCT_TYPES[0]);
  const [inStock, setInStock] = useState(STOCK_TYPE[0]);
  const [showConfim, setShowConfirm] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(0);
  const [selectedCat, setSelectedCat] = useState<smallCatProp[]>(
    product.categories,
  );
  const values: ProductFields = {
    name: '',
    type: selectedValue.value,
    regular_price: '',
    sale_price: '',
    description: '',
    short_description: '',
    featured_image: null,
    gallery_images: null,
    in_stock: true,
    sku: '',
    stock_quantity: 0,
    dimensions: {width: '', height: '', length: ''},
    seoTitle: '',
    seoDes: '',
    ...product,
  };

  const onHandlePickImage = async () => {
    const img = await pickImageLibrary();
    if (logedUser && img) {
      const result = await uploadImageApi({...logedUser, file: img});
      if (result) {
        setImages([...images, result]);
      }
    }
  };

  const onSavePress = (vals: ProductFields) => {
    setLoader(true);

    if (images?.length > 0) {
      const getSource = (image: any) => image.source_url || image.src;
      vals.featured_image = {src: getSource(images[0])};
      images.slice(1).map(img => {
        if (vals.gallery_images) {
          vals.gallery_images.push({src: getSource(img)});
        } else {
          vals.gallery_images = [{src: getSource(img)}];
        }
      });
    }
    // console.log({before: vals.categories});
    if (selectedCat.length > 0) {
      vals.categories = selectedCat?.reduce(
        (prev: string[], curr: smallCatProp) => [...prev, curr?.id?.toString()],
        [],
      );
    }
    // console.log({cat: vals.categories});
    if (logedUser && loader === false) {
      createProductAPI({
        ...logedUser,
        data: vals,
      }).then(res => {
        // console.log({createProduct: res});
        if (!res.error) {
          navigation.goBack();
        } else {
          Alert.alert(res.message);
        }
        setLoader(false);
      });
    }
  };
  const onRemovePress = () => {
    setLoader(true);

    if (logedUser) {
      deleteProductAPI({
        ...logedUser,
        data: {id: product.id},
      }).then(res => {
        // console.log({delete: res});
        if (!res.error) {
          navigation.goBack();
        } else {
          Alert.alert(res.message);
        }
      });
    }
  };

  if (loader === true) {
    return <AppLoader />;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <PageHeader
          style={[styles.header, {backgroundColor: colors.primary}]}
          showSearchFilter={false}
          showCart={false}
          showLogo={false}
          header={product?.id ? t('editProduct') : t('addNewProduct')}
          customeRightIcon={
            product?.id ? (
              <Icon
                onPress={() => setShowConfirm(true)}
                name="trash"
                color={colors.error}
              />
            ) : undefined
          }
        />
        <View style={[styles.formStyle, {minHeight: height - 250}]}>
          <Formik initialValues={values} onSubmit={onSavePress}>
            {({
              handleChange,
              handleSubmit,
              handleBlur,
              setFieldValue,
              values: formValues,
              errors,
            }) => (
              <View>
                <CustomePicker
                  placeholder={t('productType') + ' ' + selectedValue.label}
                  onItemPress={(item: (typeof PRODUCT_TYPES)[0]) => {
                    setSelectedValue(item);
                    setFieldValue('type', item.value);
                  }}
                  selectedValue={selectedValue.value}
                  items={PRODUCT_TYPES}
                />
                <CustomeTextInputWithHeader
                  placeholder={t('productName') + ''}
                  onChangeText={handleChange('name')}
                  value={formValues.name}
                  onBlur={handleBlur('name')}
                  title={t('productName')}
                  containerStyle={[errors.name ? styles.error : {}]}
                />
                <CustomeTextInputWithHeader
                  placeholder={t('regular_price') + ''}
                  onChangeText={handleChange('regular_price')}
                  value={formValues.regular_price}
                  onBlur={handleBlur('regular_price')}
                  title={t('regular_price')}
                  containerStyle={[errors.regular_price ? styles.error : {}]}
                />
                <CustomeTextInputWithHeader
                  placeholder={t('sale_price') + ''}
                  onChangeText={handleChange('sale_price')}
                  value={formValues.sale_price}
                  onBlur={handleBlur('sale_price')}
                  title={t('sale_price')}
                  containerStyle={[errors.sale_price ? styles.error : {}]}
                />
                <CustomeRichText
                  title={t('short_description')}
                  onChangeText={handleChange('short_description')}
                  value={formValues.short_description}
                />
                <CustomeRichText
                  title={t('productDescription')}
                  onChangeText={handleChange('description')}
                  value={formValues.description}
                />
                <Categories
                  {...{selectedCat}}
                  setSelectedCat={item => setSelectedCat(item)}
                />
                <PickImage
                  onAddImage={onHandlePickImage}
                  {...{images, setImages}}
                />
                <Collapse
                  setIsOpen={id => {
                    setOpenCollapse(openCollapse === 4 ? 0 : id);
                  }}
                  id={4}
                  isOpen={openCollapse === 4}
                  title={t('attributes')}
                  body={<AttributesSection />}
                />
                <Collapse
                  setIsOpen={id => {
                    setOpenCollapse(openCollapse === 1 ? 0 : id);
                  }}
                  id={1}
                  isOpen={openCollapse === 1}
                  title={t('inventory')}
                  body={
                    <>
                      <CustomeTextInputWithHeader
                        placeholder={t('sku') + ''}
                        onChangeText={handleChange('sku')}
                        value={formValues.sku}
                        onBlur={handleBlur('sku')}
                        title={t('sku')}
                        containerStyle={[errors.sku ? styles.error : {}]}
                      />
                      <CheckBoxWithText
                        text={t('manageStock')}
                        checked={manage_stock}
                        setChecked={x => setmanage_stock(x)}
                      />
                      {manage_stock === true && (
                        <CustomeTextInputWithHeader
                          placeholder={t('stock_quantity') + ''}
                          onChangeText={handleChange('stock_quantity')}
                          value={formValues.stock_quantity?.toString()}
                          onBlur={handleBlur('stock_quantity')}
                          title={t('stock_quantity')}
                          containerStyle={[
                            errors.stock_quantity ? styles.error : {},
                          ]}
                          keyboardType="number-pad"
                        />
                      )}
                      <CustomePicker
                        placeholder={t('stockStatus') + ' ' + inStock.label}
                        onItemPress={(item: (typeof STOCK_TYPE)[0]) =>
                          setInStock(item)
                        }
                        selectedValue={inStock.value}
                        items={STOCK_TYPE}
                      />
                    </>
                  }
                />
                <Collapse
                  setIsOpen={id => setOpenCollapse(openCollapse === 2 ? 0 : id)}
                  id={2}
                  isOpen={openCollapse === 2}
                  title={t('shipping')}
                  body={
                    <>
                      <CustomeTextInputWithHeader
                        placeholder={t('weight') + ''}
                        onChangeText={handleChange('weight')}
                        value={formValues.weight}
                        onBlur={handleBlur('weight')}
                        title={t('weight')}
                        containerStyle={[errors.weight ? styles.error : {}]}
                      />
                      <CustomeTitle
                        text={t('diemensions')}
                        style={styles.dieTitle}
                      />
                      <RowComponent
                        leftPart={
                          <CustomeTextInputWithHeader
                            placeholder={t('length') + ''}
                            onChangeText={handleChange('dimensions.length')}
                            value={formValues.dimensions.length}
                            onBlur={handleBlur('dimensions.length')}
                            title={t('length')}
                            containerStyle={[
                              {width: width / 4},
                              errors?.dimensions?.length ? styles.error : {},
                            ]}
                          />
                        }
                        rightPart={
                          <CustomeTextInputWithHeader
                            placeholder={t('width') + ''}
                            onChangeText={handleChange('dimensions.width')}
                            value={formValues.dimensions.width}
                            onBlur={handleBlur('dimensions.width')}
                            title={t('width')}
                            containerStyle={[
                              {width: width / 4},
                              errors.dimensions?.width ? styles.error : {},
                            ]}
                          />
                        }
                        centerPart={
                          <CustomeTextInputWithHeader
                            placeholder={t('height') + ''}
                            onChangeText={handleChange('dimensions.height')}
                            value={formValues.dimensions.height}
                            onBlur={handleBlur('dimensions.height')}
                            title={t('height')}
                            containerStyle={[
                              {width: width / 4},
                              errors.dimensions?.height ? styles.error : {},
                            ]}
                          />
                        }
                      />
                    </>
                  }
                />
                <Collapse
                  setIsOpen={id => setOpenCollapse(openCollapse === 3 ? 0 : id)}
                  id={3}
                  isOpen={openCollapse === 3}
                  title={t('seo')}
                  body={
                    <>
                      <CustomeTextInputWithHeader
                        placeholder={t('seoTitle') + ''}
                        onChangeText={handleChange('seoTitle')}
                        value={formValues.seoTitle}
                        onBlur={handleBlur('seoTitle')}
                        title={t('seoTitle')}
                        containerStyle={[errors.seoTitle ? styles.error : {}]}
                      />
                      <CustomeTextInputWithHeader
                        placeholder={t('seoDes') + ''}
                        onChangeText={handleChange('seoDes')}
                        value={formValues.seoDes}
                        onBlur={handleBlur('seoDes')}
                        title={t('seoDes')}
                        containerStyle={[errors.seoDes ? styles.error : {}]}
                      />
                    </>
                  }
                />
                <BlockBtn text={t('saveProduct')} onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
      {/* <FloatingButton text={t('saveProduct')} onPress={onSavePress} /> */}
      <ConfirmationModal
        onRequestClose={() => setShowConfirm(false)}
        visible={showConfim}
        confirmPress={onRemovePress}
        message={t('confirmProductDeleteMessage')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  scroll: {flex: 1},
  header: {paddingBottom: 0},
  error: {borderColor: '#DC484B', borderWidth: 1},
  formStyle: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  itemsInLine: {flex: 1},
  dieTitle: {paddingTop: 10},
});
export default ProductDetails;
