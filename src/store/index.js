import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';
import { EMAIL_LOGIN_FORM } from '@/library/login-modal';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  jwt: localStorage.getItem('jwt') || null,
  user: null,
  selectedMenu: '',
  selectedTrainer: {
    trainer: null,
    comments: [],
    reviews: [],
  },
  trainers: [],
  loginModalStatus: false,
  loginModalFormType: EMAIL_LOGIN_FORM,
  areas: [],
  problemCategories: [],
};

const store = {
  state,
  actions,
  getters,
  mutations,
};

export default new Vuex.Store({
  ...store,
  strict: debug,
});
