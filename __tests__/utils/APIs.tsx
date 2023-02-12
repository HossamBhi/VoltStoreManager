import axios from 'axios';
import {
  getAllProductsAPI,
  getOrderDetailsAPI,
  getOrdersAPI,
  getUserDataAPI,
} from '../../src/utils/APIs';

const host = 'https://dukkaany.com';
const username = 'alsaaidmarket3@gmail.com';
const password = 'alsaaid#market3';

jest.mock('react-native-config', () => ({
  DOMAIN: 'https://dukkaany.com',
}));

describe('Test login api get userdata', () => {
  it('should return user data', async () => {
    const userData = {
      id: 98,
      name: 'alsaaidmarket3',
      url: '',
      description: '',
      link: 'https://dukkaany.com/store/alsaaid',
      slug: 'alsaaid',
      avatar_urls: {
        '24': 'https://secure.gravatar.com/avatar/97364ee3c6cac9909a5300c4156aced4?s=24&d=mm&r=g',
        '48': 'https://secure.gravatar.com/avatar/97364ee3c6cac9909a5300c4156aced4?s=48&d=mm&r=g',
        '96': 'https://secure.gravatar.com/avatar/97364ee3c6cac9909a5300c4156aced4?s=96&d=mm&r=g',
      },
      meta: [],
      is_super_admin: false,
      woocommerce_meta: {
        activity_panel_inbox_last_read: '',
        activity_panel_reviews_last_read: '',
        categories_report_columns: '',
        coupons_report_columns: '',
        customers_report_columns: '',
        orders_report_columns: '',
        products_report_columns: '',
        revenue_report_columns: '',
        taxes_report_columns: '',
        variations_report_columns: '',
        dashboard_sections: '',
        dashboard_chart_type: '',
        dashboard_chart_interval: '',
        dashboard_leaderboard_rows: '',
        homepage_layout: '',
        homepage_stats: '',
        task_list_tracked_started_tasks: '',
        help_panel_highlight_shown: '',
        android_app_banner_dismissed: '',
      },
      _links: {
        self: [
          {
            href: 'https://dukkaany.com/wp-json/wp/v2/users/98',
          },
        ],
        collection: [
          {
            href: 'https://dukkaany.com/wp-json/wp/v2/users',
          },
        ],
      },
    };
    (axios.get as jest.Mock).mockResolvedValueOnce(userData);
    const result = await getUserDataAPI({username, password});
    expect(axios.get).toHaveBeenCalledWith(`${host}/wp-json/wp/v2/users/me`, {
      auth: {username, password},
    });
    expect(result).toEqual(userData);
  });
  it('should return an error', async () => {
    const message = 'Network Error';
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error(message));
    const result = await getUserDataAPI({username, password});
    expect(axios.get).toHaveBeenCalledWith(`${host}/wp-json/wp/v2/users/me`, {
      auth: {username, password},
    });
    expect(result).toEqual({data: {message: 'Connection Error.'}});
  });
});

describe('Test Products api', () => {
  it('should return products', async () => {
    const products: any = [];
    const searchValue = '';
    const per_page = 50;
    const page = 1;
    (axios.get as jest.Mock).mockResolvedValueOnce(products);
    const result = await getAllProductsAPI({
      username,
      password,
      searchValue,
      per_page,
      page,
    });

    expect(axios.get).toHaveBeenCalledWith(
      `${host}/wp-json/wcfmmp/v1/products/?status=all&page=${page}&per_page=${per_page}&search=${searchValue}`,
      {
        auth: {username, password},
      },
    );
    expect(result).toEqual(products);
  });
  it('should return an error', async () => {
    const message = 'Network Error';
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error(message));
    const searchValue = '';
    const per_page = 50;
    const page = 1;
    const result = await getAllProductsAPI({
      username,
      password,
      searchValue,
      per_page,
      page,
    });
    expect(axios.get).toHaveBeenCalledWith(
      `${host}/wp-json/wcfmmp/v1/products/?status=all&page=${page}&per_page=${per_page}&search=${searchValue}`,
      {
        auth: {username, password},
      },
    );
    expect(result).toEqual({data: {message: 'Connection Error.'}});
  });
});

describe('Test Get Orders api', () => {
  it('should return orders', async () => {
    const orders: any = [];

    (axios.get as jest.Mock).mockResolvedValueOnce(orders);
    const result = await getOrdersAPI({
      username,
      password,
    });

    expect(axios.get).toHaveBeenCalledWith(
      `${host}/wp-json/wcfmmp/v1/orders/`,
      {
        auth: {username, password},
      },
    );
    expect(result).toEqual(orders);
  });
  it('should return an error', async () => {
    const message = 'Network Error';
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error(message));

    const result = await getOrdersAPI({
      username,
      password,
    });
    expect(axios.get).toHaveBeenCalledWith(
      `${host}/wp-json/wcfmmp/v1/orders/`,
      {
        auth: {username, password},
      },
    );
    expect(result).toEqual({data: {message: 'Connection Error.'}});
  });
});
