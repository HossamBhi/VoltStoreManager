import {DefaultTFuncReturn, t} from 'i18next';

export type TextProp = {
  text?: string | number | DefaultTFuncReturn;
  title?: string | number | DefaultTFuncReturn;
  note?: string | number | DefaultTFuncReturn;
  placeholder?: string | number | DefaultTFuncReturn;
  message?: string | number | DefaultTFuncReturn;
};

export const getProductTypes = () => [
  {label: t('simple'), value: 'simple'},
  {label: t('variable'), value: 'variable'},
];
export const getStockType = () => [
  {label: t('inStock'), value: 'true'},
  {label: t('outOfStock'), value: 'false'},
];
const categories_Dummy = [
  {
    id: 275,
    name: 'نجمة بدر',
    slug: '%d9%85%d8%b7%d8%b9%d9%85-%d9%86%d8%ac%d9%85%d8%a9-%d8%a8%d8%af%d8%b1',
    parent: 39,
    description: 'كشرى وحلوانى',
    display: 'default',
    image: {
      id: 19476,
      date_created: '2022-06-30T07:17:45',
      date_created_gmt: '2022-06-30T05:17:45',
      date_modified: '2022-06-30T07:17:45',
      date_modified_gmt: '2022-06-30T05:17:45',
      src: 'https://dukkaany.com/wp-content/uploads/2022/06/نجمة-التحرير.jpg',
      name: 'Brown wooden textured flooring background',
      alt: '',
    },
    menu_order: 80,
    count: 13,
    base: 'product-category',
    _links: {
      self: [
        {
          href: 'https://dukkaany.com/wp-json/wc/v3/products/categories/275',
        },
      ],
      collection: [
        {
          href: 'https://dukkaany.com/wp-json/wc/v3/products/categories',
        },
      ],
      up: [
        {
          href: 'https://dukkaany.com/wp-json/wc/v3/products/categories/39',
        },
      ],
    },
  },
];

export type categroyProps = (typeof categories_Dummy)[0];
export type smallCatProp = {id: number; name: string; slug: string};
const products_dummy = [
  {
    id: 23224,
    name: 'زبادي دانيت بطعم الشيكولاتة',
    slug: '%d8%b2%d8%a8%d8%a7%d8%af%d9%8a-%d8%af%d8%a7%d9%86%d9%8a%d8%aa-%d8%a8%d8%b7%d8%b9%d9%85-%d8%a7%d9%84%d8%b4%d9%8a%d9%83%d9%88%d9%84%d8%a7%d8%aa%d8%a9-3',
    post_author: '98',
    permalink:
      'https://dukkaany.com/product/%d8%b2%d8%a8%d8%a7%d8%af%d9%8a-%d8%af%d8%a7%d9%86%d9%8a%d8%aa-%d8%a8%d8%b7%d8%b9%d9%85-%d8%a7%d9%84%d8%b4%d9%8a%d9%83%d9%88%d9%84%d8%a7%d8%aa%d8%a9-3/',
    date_created: '2023-01-08T02:05:03',
    date_created_gmt: '2023-01-08T00:05:03',
    date_modified: '2023-01-14T17:45:35',
    date_modified_gmt: '2023-01-14T15:45:35',
    type: 'simple',
    status: 'publish',
    featured: false,
    catalog_visibility: 'visible',
    description: '<p>زبادي دانيت بطعم الشيكولاتة</p>\n',
    short_description: '<p>بطعم الشيكولاتة</p>\n',
    sku: '',
    price: '7.5',
    regular_price: '82',
    sale_price: '7.5',
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    price_html:
      '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi>82.00&nbsp;<span class="woocommerce-Price-currencySymbol">EGP</span></bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi>7.50&nbsp;<span class="woocommerce-Price-currencySymbol">EGP</span></bdi></span></ins>',
    on_sale: true,
    purchasable: true,
    total_sales: 1,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: '',
    button_text: '',
    tax_status: 'taxable',
    tax_class: '',
    manage_stock: false,
    stock_quantity: null,
    low_stock_amount: '',
    in_stock: true,
    backorders: 'no',
    backorders_allowed: false,
    backordered: false,
    sold_individually: false,
    weight: '',
    dimensions: {
      length: '',
      width: '',
      height: '',
    },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: '',
    shipping_class_id: 0,
    reviews_allowed: true,
    average_rating: '0.00',
    rating_count: 0,
    related_ids: [5053, 5058, 5015, 5024, 4363],
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: '',
    categories: [
      {
        id: 27,
        name: 'السوبر ماركت',
        slug: 'supermarket',
      },
      {
        id: 86,
        name: 'منتجات الالبان',
        slug: 'milk-products',
      },
    ],
    tags: [],
    images: [
      {
        id: 6066,
        date_created: '2022-03-21T19:53:24',
        date_created_gmt: '2022-03-21T17:53:24',
        date_modified: '2023-01-14T19:45:35',
        date_modified_gmt: '2023-01-14T15:45:35',
        src: 'https://dukkaany.com/wp-content/uploads/2022/03/دانيت.jpg',
        name: 'دانيت',
        alt: '',
        position: 0,
        '1536x1536':
          'https://dukkaany.com/wp-content/uploads/2022/03/دانيت.jpg',
        '2048x2048':
          'https://dukkaany.com/wp-content/uploads/2022/03/دانيت.jpg',
        woocommerce_thumbnail:
          'https://dukkaany.com/wp-content/uploads/2022/03/دانيت-300x225.jpg',
        woocommerce_single:
          'https://dukkaany.com/wp-content/uploads/2022/03/دانيت.jpg',
        woocommerce_gallery_thumbnail:
          'https://dukkaany.com/wp-content/uploads/2022/03/دانيت-100x100.jpg',
        shop_catalog:
          'https://dukkaany.com/wp-content/uploads/2022/03/دانيت-300x225.jpg',
        shop_single:
          'https://dukkaany.com/wp-content/uploads/2022/03/دانيت.jpg',
        shop_thumbnail:
          'https://dukkaany.com/wp-content/uploads/2022/03/دانيت-100x100.jpg',
      },
    ],
    attributes: [],
    default_attributes_org: [],
    default_attributes_array: [],
    default_attributes: [],
    variations: [],
    variation_attributes: [],
    grouped_products: [],
    menu_order: 0,
    meta_data: [
      {
        id: 341095,
        key: '_last_editor_used_jetpack',
        value: 'classic-editor',
      },
      {
        id: 341096,
        key: '_aioseo_title',
        value: '#post_title #separator_sa #site_title',
      },
      {
        id: 341097,
        key: '_aioseo_description',
        value: '#post_excerpt',
      },
      {
        id: 341098,
        key: '_aioseo_keywords',
        value: '',
      },
      {
        id: 341099,
        key: '_aioseo_og_article_section',
        value: '',
      },
      {
        id: 341100,
        key: '_aioseo_og_article_tags',
        value: '',
      },
      {
        id: 341101,
        key: 'om_disable_all_campaigns',
        value: '',
      },
      {
        id: 341102,
        key: 'wcmvp_product_view_count',
        value: '1',
      },
      {
        id: 341103,
        key: '_wcfm_product_views',
        value: '5',
      },
      {
        id: 341104,
        key: '_has_multi_selling',
        value: '6060',
      },
      {
        id: 341105,
        key: '_wpas_done_all',
        value: '1',
      },
      {
        id: 341106,
        key: '_wcfm_new_product_notified',
        value: 'yes',
      },
      {
        id: 341107,
        key: '_catalog',
        value: 'no',
      },
      {
        id: 341108,
        key: 'disable_add_to_cart',
        value: 'no',
      },
      {
        id: 341109,
        key: 'disable_price',
        value: 'no',
      },
      {
        id: 341110,
        key: '_aioseop_title',
        value: '',
      },
      {
        id: 341111,
        key: '_aioseop_description',
        value: '',
      },
      {
        id: 341112,
        key: '_wcfmmp_processing_time',
        value: '',
      },
    ],
    product_units: {
      weight_unit: 'kg',
      dimension_unit: 'cm',
    },
    wcfm_product_policy_data: {
      visible: false,
    },
    showAdditionalInfoTab: false,
    store: {
      vendor_id: 98,
      vendor_display_name: 'alsaaidmarket3',
      vendor_shop_name: 'السعيد',
      formatted_display_name: 'السعيد - alsaaidmarket3 (#98 - alsaaidmarket3)',
      store_hide_email: 'no',
      store_hide_phone: 'no',
      store_hide_address: 'no',
      store_hide_description: 'no',
      store_hide_policy: 'no',
      store_products_per_page: 10,
      vendor_address: 'قرية عمر مكرم, بدر, مركز بدر - قرية عمر مكرم مصر',
      disable_vendor: 'no',
      is_store_offline: 'no',
      vendor_shop_logo:
        'https://dukkaany.com/wp-content/uploads/2022/12/8585-removebg-preview-1.jpg',
      vendor_banner_type: 'image',
      vendor_banner:
        'https://dukkaany.com/wp-content/uploads/2022/12/41414-removebg-preview.jpg',
      mobile_banner:
        'https://dukkaany.com/wp-content/uploads/2022/12/41414-removebg-preview.jpg',
      vendor_list_banner_type: 'image',
      vendor_list_banner:
        'https://dukkaany.com/wp-content/uploads/2022/12/41414-removebg-preview.jpg',
      email_verified: '',
      vendor_additional_info: [
        {
          type: 'text',
          label: '',
          options: '',
          content: '',
          help_text: '',
          name: '',
          value: '',
        },
      ],
      vendor_description: '<p><br data-mce-bogus="1"></p>\n',
      vendor_policies: {
        shipping_policy_heading: 'Shipping Policy',
        shipping_policy: '<p><br></p>',
        refund_policy_heading: 'Refund Policy',
        refund_policy: '<p><br></p>',
        cancellation_policy_heading: 'Cancellation / Return / Exchange Policy',
        cancellation_policy: '<p><br></p>',
      },
      store_tab_headings: {
        products: 'منتجات',
        about: 'حول',
      },
    },
    _links: {
      self: [
        {
          href: 'https://dukkaany.com/wp-json/wcfmmp/v1/products/23224',
        },
      ],
      collection: [
        {
          href: 'https://dukkaany.com/wp-json/wcfmmp/v1/products',
        },
      ],
    },
  },
];

export type ProductProps = (typeof products_dummy)[0];

const orders_dummy = [
  {
    id: 23293,
    parent_id: 0,
    status: 'processing',
    currency: 'EGP',
    version: '6.3.1',
    prices_include_tax: false,
    date_created: '2023-01-18T14:29:40',
    date_modified: '2023-01-18T14:29:41',
    discount_total: '0',
    discount_tax: '0',
    shipping_total: '30',
    shipping_tax: '0',
    cart_tax: '0',
    total: '56.00',
    total_tax: '0',
    customer_id: 1,
    order_key: 'wc_order_CUEEIifV66SCw',
    billing: {
      first_name: 'mohamed',
      last_name: '',
      company: '',
      address_1: 'alqods street',
      address_2: '',
      city: 'Bohaira',
      state: 'مركز بدر - قرية صلاح الدين',
      postcode: '',
      country: 'EG',
      email: 'm.bahi18@gmail.com',
      phone: '01069210903',
    },
    shipping: {
      first_name: 'mohamed',
      last_name: '',
      company: '',
      address_1: 'alqods street',
      address_2: '',
      city: 'Bohaira',
      state: 'مركز بدر - قرية صلاح الدين',
      postcode: '',
      country: 'EG',
      phone: '',
    },
    payment_method: 'cod',
    payment_method_title: 'Cash on delivery',
    transaction_id: '',
    customer_ip_address: '196.157.105.176',
    customer_user_agent:
      'Mozilla/5.0 (Linux; Android 11; M2101K6G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/105.0.5195.136 Mobile Safari/537.36',
    created_via: 'checkout',
    customer_note: '',
    date_completed: null,
    date_paid: null,
    cart_hash: '13d716269b3aee2d1d507ec7c432b5dd',
    number: '23293',
    meta_data: [
      {
        id: 346152,
        key: 'is_vat_exempt',
        value: 'no',
      },
      {
        id: 346153,
        key: '_wcfmmp_order_processed',
        value: 'yes',
      },
      {
        id: 346158,
        key: '_wcfm_new_order_notified',
        value: 'yes',
      },
      {
        id: 346159,
        key: '_wcfm_membership_order_processed',
        value: 'yes',
      },
      {
        id: 346160,
        key: '_new_order_email_sent',
        value: 'true',
      },
      {
        id: 346161,
        key: '_wcfmmp_order_email_triggered',
        value: 'yes',
      },
    ],
    line_items: [
      {
        id: 283,
        name: 'زبادي دانيت بطعم الشيكولاتة',
        product_id: 23224,
        variation_id: 0,
        quantity: 1,
        tax_class: '',
        subtotal: '7.5',
        subtotal_tax: '0',
        total: '7.5',
        total_tax: '0',
        taxes: [],
        meta_data: [
          {
            id: 2408,
            key: '_vendor_id',
            value: '98',
          },
          {
            id: 2409,
            key: '_wcfmmp_order_item_processed',
            value: '11',
          },
        ],
        sku: '',
        thumbnail:
          '<img width="150" height="150" src="https://dukkaany.com/wp-content/uploads/2022/03/دانيت-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" title="" srcset="https://dukkaany.com/wp-content/uploads/2022/03/دانيت-150x150.jpg 150w, https://dukkaany.com/wp-content/uploads/2022/03/دانيت-75x75.jpg 75w, https://dukkaany.com/wp-content/uploads/2022/03/دانيت-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px" />',
        image_url:
          'https://dukkaany.com/wp-content/uploads/2022/03/دانيت-150x150.jpg',
        price: 7.5,
        store_name: 'السعيد',
        commission_value: 0.3700000000000001,
      },
    ],
    tax_lines: [],
    shipping_lines: [
      {
        id: 286,
        method_title: 'شحن سريع',
        method_id: 'flat_rate',
        instance_id: '24',
        total: '10.00',
        total_tax: '0',
        taxes: [],
        meta_data: [
          {
            id: 2397,
            key: 'عناصر',
            value: 'زبادي دانيت بطعم الشيكولاتة &times; 1',
          },
          {
            id: 2398,
            key: 'vendor_id',
            value: '98',
          },
          {
            id: 2399,
            key: 'package_qty',
            value: '1',
          },
          {
            id: 2400,
            key: 'method_slug',
            value: 'flat_rate',
          },
          {
            id: 2401,
            key: 'processing_time',
            value: '-',
          },
        ],
        store_name: 'السعيد',
      },
    ],
    fee_lines: [],
    coupon_lines: [],
    date_created_gmt: '2023-01-18T12:29:40',
    date_modified_gmt: '2023-01-18T12:29:41',
    date_completed_gmt: null,
    date_paid_gmt: null,
    commission_head: 'مصاريف',
    user_delivery_location: '',
    shipment_tracking: {
      each_data: [
        {
          item_id: 283,
          product_id: 23224,
          product_name: 'زبادي دانيت بطعم الشيكولاتة',
          mark_shipped: true,
        },
      ],
    },
    vendor_order_details: {
      ID: '11',
      vendor_id: '98',
      order_id: '23293',
      customer_id: '1',
      payment_method: 'cod',
      product_id: '23224',
      variation_id: '0',
      quantity: '1',
      product_price: '7.5',
      purchase_price: '7.5',
      item_id: '283',
      item_type: 'line_item',
      item_sub_total: '7.5',
      item_total: '7.5',
      shipping: '10',
      tax: '0',
      shipping_tax_amount: '0',
      commission_amount: '7.13',
      discount_amount: '0',
      discount_type: '',
      other_amount: '0',
      other_amount_type: '',
      withdrawal_id: '0',
      refunded_id: '0',
      refunded_amount: '0',
      withdraw_charges: '0',
      total_commission: '7.13',
      order_status: 'processing',
      shipping_status: 'pending',
      commission_status: 'processing',
      withdraw_status: 'pending',
      refund_status: 'pending',
      is_refunded: '0',
      is_partially_refunded: '0',
      is_withdrawable: '1',
      is_auto_withdrawal: '1',
      is_trashed: '0',
      commission_paid_date: null,
      created: '2023-01-18 14:29:41',
      commission_ids: '11',
      order_item_ids: '283',
      order_item_count: '1',
      is_refundeds: '0',
      refund_statuses: 'pending',
    },
  },
];
export type OrderProps = (typeof orders_dummy)[0];

const uplaodedImage = {
  _links: {
    self: [{href: 'https://dukkaany.com/wp-json/wp/v2/media/23325'}],
    collection: [{href: 'https://dukkaany.com/wp-json/wp/v2/media'}],
    about: [{href: 'https://dukkaany.com/wp-json/wp/v2/types/attachment'}],
    author: [
      {embeddable: true, href: 'https://dukkaany.com/wp-json/wp/v2/users/33'},
    ],
    replies: [
      {
        embeddable: true,
        href: 'https://dukkaany.com/wp-json/wp/v2/comments?post=23325',
      },
    ],
  },
  alt_text: '',
  author: 33,
  caption: {raw: '', rendered: ''},
  comment_status: 'open',
  date: '2023-02-03T16:46:04',
  date_gmt: '2023-02-03T14:46:04',
  description: {
    raw: '',
    rendered:
      '<p class="attachment"><a href=\'https://dukkaany.co…lt="" decoding="async" loading="lazy" /></a></p>↵',
  },
  generated_slug: 'badrgreenmarketgmail-com1675435564237',
  guid: {
    rendered:
      'https://dukkaany.com/wp-content/uploads/2023/02/badrgreenmarket@gmail.com1675435564237.png',
    raw: 'https://dukkaany.com/wp-content/uploads/2023/02/badrgreenmarket@gmail.com1675435564237.png',
  },
  id: 23325,
  jetpack_likes_enabled: false,
  jetpack_sharing_enabled: true,
  link: 'https://dukkaany.com/badrgreenmarketgmail-com1675435564237/',
  media_details: {
    width: 31,
    height: 25,
    file: '2023/02/badrgreenmarket@gmail.com1675435564237.png',
    filesize: 610,
    sizes: {},
  },
  media_type: 'image',
  meta: {
    om_disable_all_campaigns: false,
    _mi_skip_tracking: false,
    spay_email: '',
  },
  mime_type: 'image/png',
  missing_image_sizes: [],
  modified: '2023-02-03T16:46:04',
  modified_gmt: '2023-02-03T14:46:04',
  permalink_template: 'https://dukkaany.com/?attachment_id=23325',
  ping_status: 'closed',
  post: null,
  slug: 'badrgreenmarketgmail-com1675435564237',
  source_url:
    'https://dukkaany.com/wp-content/uploads/2023/02/badrgreenmarket@gmail.com1675435564237.png',
  src: 'https://dukkaany.com/wp-content/uploads/2023/02/badrgreenmarket@gmail.com1675435564237.png',
  status: 'inherit',
  template: '',
  title: {
    raw: 'badrgreenmarket@gmail.com1675435564237',
    rendered: 'badrgreenmarket@gmail.com1675435564237',
  },
  type: 'attachment',
};

export type uplaodedImageProps = typeof uplaodedImage;
