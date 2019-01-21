export const setAxiosAuth = async jwt => {
  window.axios.defaults.headers.common.Accept = 'application/json';
  window.axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
};

export const unsetAxiosAuth = async () => {
  delete window.axios.defaults.headers.common.Accept;
  delete window.axios.defaults.headers.common.Authorization;
};
