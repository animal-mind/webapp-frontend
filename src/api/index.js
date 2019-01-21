import axios from 'axios';

const BASE_URL = '/api';
const HTTPS = axios.create({ baseURL: BASE_URL });

export const doLogin = ({ email, password }) =>
  HTTPS.post('/login', { email, password })
    .then(response => response)
    .catch(error => error.response);

export const doGetLoggedInUser = () =>
  HTTPS.get('/user')
    .then(response => response)
    .catch(error => error.response);

export const doRegisterUser = data =>
  HTTPS.post('/register', data)
    .then(response => response)
    .catch(error => error.response);

export const doGetAreas = () =>
  HTTPS.get('/areas')
    .then(response => response)
    .catch(error => error.response);

export const doGetProblemCategories = () =>
  HTTPS.get('/problem-categories')
    .then(response => response)
    .catch(error => error.response);

export const doPutTrainer = data =>
  HTTPS.put('/trainers', data)
    .then(response => response)
    .catch(error => error.response);

export const doGetTrainers = filterValues => {
  console.log(filterValues);
  const urlEndpoint = '/trainers';

  return HTTPS.get(urlEndpoint)
    .then(response => response)
    .catch(error => error.response);
};

export const doGetTrainerDetail = slug => {
  const urlEndpoint = `/trainers/${slug}`;

  return HTTPS.get(urlEndpoint)
    .then(response => response)
    .catch(error => error.response);
};

export const doGetTrainerComments = slug => {
  const urlEndpoint = `/trainers/${slug}/comments`;

  return HTTPS.get(urlEndpoint)
    .then(response => response)
    .catch(error => error.response);
};

export const doGetTrainerReviews = slug => {
  const urlEndpoint = `/trainers/${slug}/reviews`;

  return HTTPS.get(urlEndpoint)
    .then(response => response)
    .catch(error => error.response);
};
