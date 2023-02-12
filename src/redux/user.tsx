import {createSlice} from '@reduxjs/toolkit';
const dummy_user = {
  avatar_urls: {'24': '', '48': '', '96': ''},
  description: '',
  id: 98,
  is_super_admin: false,
  link: '',
  name: '',
  password: '',
  slug: '',
  url: '',
  username: '',
};
const initialState: {
  logedUser: null | typeof dummy_user;
} = {
  logedUser: null,
};

const user = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLogedUserAction: (state, {payload}) => {
      state.logedUser = payload;
    },
    logOutAction: state => {
      state.logedUser = null;
    },
  },
});

export const {setLogedUserAction, logOutAction} = user.actions;
export default user.reducer;
