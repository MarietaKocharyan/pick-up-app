export const authStorage = {
  set: (data: any) => {
    localStorage.setItem('userType', data.userType);
    localStorage.setItem('tokenType', data.tokenType);
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
  },
  get: () => ({
    userType: localStorage.getItem('userType'),
    tokenType: localStorage.getItem('tokenType'),
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
  }),
  remove: () => {
    localStorage.removeItem('userType');
    localStorage.removeItem('tokenType');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },
  clear: () => {
    localStorage.clear();
  },
};
