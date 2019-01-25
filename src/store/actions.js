import {
  doLogin,
  doGetLoggedInUser,
  doRegisterUser,
  doGetAreas,
  doGetProblemCategories,
  doPutTrainer,
  doGetTrainers,
  doGetTrainerDetail,
  doGetTrainerComments,
  doGetTrainerReviews,
} from '@/api';
import { setAxiosAuth, unsetAxiosAuth } from '@/library/auth';
import { EMAIL_LOGIN_FORM } from '@/library/login-modal';

export const registerUser = ({ commit }, data) =>
  doRegisterUser(data).then(async response => {
    if (response.status !== 200) {
      return response;
    }
    const { token, user } = response.data.success;

    await setAxiosAuth(token);
    commit('USER_LOGGED_IN', { token, user });
    return response;
  });

export const logUserIn = ({ commit }, { email, password }) =>
  doLogin({ email, password }).then(async response => {
    if (response.status !== 200) {
      return response;
    }
    const { token, user } = response.data.success;

    await setAxiosAuth(token);
    commit('USER_LOGGED_IN', { token, user });
    return response;
  });

export const getLoggedInUser = ({ commit }) =>
  doGetLoggedInUser().then(response => {
    if (response.status !== 200) {
      return response;
    }
    const user = response.data;
    commit('USER_RETRIEVED', { user });
    return response;
  });

export const logUserOut = async ({ commit }) => {
  await unsetAxiosAuth();
  commit('USER_LOGOUT');
};

export const switchLoginModalStatus = ({ dispatch, commit }, newStatus) => {
  commit('NEW_LOGIN_MODAL_STATUS_RECEIVED', { newStatus });
  if (newStatus === false) {
    dispatch('switchLoginModalFormType', EMAIL_LOGIN_FORM);
  }
};

export const switchLoginModalFormType = ({ commit }, newFormType) => {
  commit('NEW_LOGIN_MODAL_FORM_TYPE_RECEIVED', { newFormType });
};

export const getAreas = async ({ commit }) => {
  const response = await doGetAreas();
  if (response.status !== 200) {
    return response;
  }
  commit('AREAS_RETRIEVED', { areas: response.data });
  return response;
};

export const getProblemCategories = async ({ commit }) => {
  const response = await doGetProblemCategories();
  if (response.status !== 200) {
    return response;
  }
  commit('PROBLEM_CATEGORIES_RETRIEVED', { problemCategories: response.data });
  return response;
};

export const saveTrainer = async ({ commit }, data) => {
  const response = await doPutTrainer(data);
  if (response.status !== 200) {
    return response;
  }
  const user = response.data.success;
  commit('USER_RETRIEVED', { user });
  return response;
};

export const getTrainers = async ({ commit }, filterValues) => {
  const response = await doGetTrainers(filterValues);
  if (response.status !== 200) {
    return response;
  }

  commit('TRAINERS_RETRIEVED', { trainers: response.data.data });
  return response;
};

export const cleanTrainerStates = ({ commit }) => {
  commit('CLEAN_TRAINER_STATES');
};

export const getTrainerDetail = async ({ dispatch, commit }, slug) => {
  await dispatch('cleanTrainerStates');
  const response = await doGetTrainerDetail(slug);
  if (response.status !== 200) {
    return response;
  }

  commit('TRAINER_DETAIL_RETRIEVED', { trainer: response.data });
  return response;
};

export const getTrainerComments = async ({ commit }, slug) => {
  const response = await doGetTrainerComments(slug);
  if (response.status !== 200) {
    return response;
  }

  commit('TRAINER_COMMENTS_RETRIEVED', { comments: response.data });
  return response;
};

export const getTrainerReviews = async ({ commit }, slug) => {
  const response = await doGetTrainerReviews(slug);
  if (response.status !== 200) {
    return response;
  }

  commit('TRAINER_REVIEWS_RETRIEVED', { reviews: response.data });
  return response;
};
