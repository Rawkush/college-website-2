import axios from 'axios';

export const login = () => ({
  type: 'ADMIN_LOGIN',
});

export const startLogin = ({ username, password }) => (dispatch) =>
  axios
    .post('http://localhost:3000/s/admin/login', {
      username,
      password,
    })
    .then((res) => {
      localStorage.setItem('adminToken', res.data.token);
      dispatch(login());
      return Promise.resolve('success');
    })
    .catch((err) => Promise.reject(err));

export const logout = () => ({
  type: 'LOGOUT',
});

export const startLogout = () => () => {};
