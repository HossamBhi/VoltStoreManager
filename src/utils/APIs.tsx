import axios, {AxiosError} from 'axios';
import {t} from 'i18next';
import Config from 'react-native-config';
const host = Config.DOMAIN;

type userProps = {
  username: string;
  password: string;
};
interface creactPPAPI extends userProps {
  data: any;
}

export const getUserDataAPI = async ({username, password}: userProps) => {
  try {
    return await axios.get(`${host}/wp-json/wp/v2/users/me`, {
      auth: {username, password},
    });
  } catch (error: any) {
    return onCatchError(error);
  }
};

export const getOrdersAPI = async ({username, password}: userProps) => {
  try {
    return await axios.get(`${host}/wp-json/wcfmmp/v1/orders/`, {
      auth: {username, password},
    });
  } catch (error: any) {
    return onCatchError(error);
  }
};

export const getAllProductsAPI = async ({
  username,
  password,
  searchValue,
  per_page = 50,
  page = 1,
}: userProps & {searchValue: string; per_page: number; page: number}) => {
  try {
    return await axios.get(
      `${host}/wp-json/wcfmmp/v1/products/?status=all&page=${page}&per_page=${per_page}&search=${searchValue}`,
      {
        auth: {username, password},
      },
    );
  } catch (error: any) {
    return onCatchError(error);
  }
};

export const createProductAPI = async ({
  username,
  password,
  data,
}: creactPPAPI) =>
  await axios({
    url: `${host}/wp-json/wcfmmp/v1/products/${data?.id ? data?.id : ''}`,
    auth: {username, password},
    method: 'POST',
    data,
  })
    .then(res => res.data)
    .catch(onCatchError);

export const deleteProductAPI = async ({
  username,
  password,
  data,
}: creactPPAPI) =>
  await axios({
    url: `${host}/wp-json/wcfmmp/v1/products/${data?.id}`,
    auth: {username, password},
    method: 'delete',
    data,
  })
    .then(res => res.data)
    .catch(onCatchError);

export const uploadImageApi = async ({
  username,
  password,
  file,
}: userProps & {file: any}) => {
  const base64 = require('base-64');
  let myHeaders = new Headers();
  myHeaders.append(
    'content-disposition',
    'form-data; filename="' + username + new Date().getTime() + '.jpeg"',
  );
  myHeaders.append('content-type', 'image/jpeg');
  myHeaders.append(
    'Authorization',
    'Basic ' + base64.encode(`${username}:${password}`),
  );
  myHeaders.append('Cookie', '_lscache_vary=dca6c7dcf6f05c2d11f4d4bc3213e083');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: file,
    redirect: 'follow',
  };

  return await fetch('https://dukkaany.com/wp-json/wp/v2/media', requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => error);
};

export const getCategoriesAPI = async ({username, password}: userProps) =>
  await axios
    .get(`${host}/wp-json/wc/v3/products/categories?page=1&per_page=100`, {
      auth: {username, password},
    })
    .then(res => res.data)
    .catch(onCatchError);

// export const getOrderDetailsAPI = async ({username, password}: userProps) =>
//   await axios
//     .get(`${host}/wp-json/wcfmmp/v1/products/?status=all&page=1&per_page=100`, {
//       auth: {username, password},
//     })
//     .then(res => res.data)
//     .catch(onCatchError);

const onCatchError = (error: Error | AxiosError) => {
  if (axios.isAxiosError(error)) {
    console.log('on chatch error: ', error);
    if (error.response) {
      const {data}: any = error.response;
      console.log('error.response: ', error.response);
      return {data: {error: true, ...data}};
    } else if (error.request) {
      console.log('error.request: ', error.request);
      return {data: {message: t('Make sure about internet')}};
    }
  }
  return {data: {message: 'Connection Error.'}};
};
