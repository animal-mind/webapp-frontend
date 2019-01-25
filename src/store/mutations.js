import { transformTrainerData } from '@/library/transform-trainer-data';

/* eslint-disable no-param-reassign */

export default {
  SELECTED_MENU_CHANGED(state, { menuName }) {
    state.selectedMenu = menuName;
  },
  USER_LOGGED_IN(state, { token, user }) {
    state.jwt = token;
    localStorage.setItem('jwt', token);
    state.user = user;
  },
  USER_LOGOUT(state) {
    state.jwt = null;
    state.user = null;
    localStorage.removeItem('jwt');
  },
  USER_RETRIEVED(state, { user }) {
    state.user = user;
  },
  NEW_LOGIN_MODAL_STATUS_RECEIVED(state, { newStatus }) {
    state.loginModalStatus = newStatus;
  },
  NEW_LOGIN_MODAL_FORM_TYPE_RECEIVED(state, { newFormType }) {
    state.loginModalFormType = newFormType;
  },
  AREAS_RETRIEVED(state, { areas }) {
    state.areas = areas;
  },
  PROBLEM_CATEGORIES_RETRIEVED(state, { problemCategories }) {
    state.problemCategories = problemCategories;
  },
  TRAINERS_RETRIEVED(state, { trainers }) {
    state.trainers = trainers.map(trainer => transformTrainerData(trainer));
  },

  TRAINER_DETAIL_RETRIEVED(state, { trainer }) {
    state.selectedTrainer.trainer = transformTrainerData(trainer);
  },
  TRAINER_COMMENTS_RETRIEVED(state, { comments }) {
    state.selectedTrainer.comments = comments;
  },
  TRAINER_REVIEWS_RETRIEVED(state, { reviews }) {
    state.selectedTrainer.reviews = reviews;
  },
  CLEAN_TRAINER_STATES(state) {
    state.selectedTrainer = {
      trainer: null,
      comments: [],
      reviews: [],
    };
  },
};

/* eslint-enable */
