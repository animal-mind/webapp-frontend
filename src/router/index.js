import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Trainers from '../views/Trainers';
import NotFound from '../views/NotFound';
import TrainerEdit from '../views/TrainerEdit';
import TrainerDetail from '../views/TrainerDetail';
import MyPage from '../views/MyPage';
import FAQ from '../views/FAQ';
import Service from '../views/Service';
import store from '../store';
import { setAxiosAuth } from '../library/auth';
import { MENUS } from '../library/constants';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: () => 'Animal Mind',
        menuName: MENUS.HOME,
      },
    },
    {
      path: '/trainers',
      name: 'trainers',
      component: Trainers,
      meta: {
        title: () => `${MENUS.TRAINERS_SEARCH} | Animal Mind`,
        menuName: MENUS.TRAINERS_SEARCH,
      },
    },
    {
      path: '/trainer/:slug',
      name: 'trainer',
      component: TrainerDetail,
      meta: {
        title: () => `${MENUS.TRAINER_DETAIL} | Animal Mind`,
        menuName: MENUS.TRAINER_DETAIL,
      },
    },
    {
      path: '/trainer-register',
      name: 'trainerRegister',
      component: TrainerEdit,
      meta: {
        title: () => `${MENUS.TRAINER_REGISTER} | Animal Mind`,
        menuName: MENUS.TRAINER_REGISTER,
      },
    },
    {
      path: '/trainer-edit',
      name: 'trainerEdit',
      component: TrainerEdit,
      meta: {
        title: () => `${MENUS.TRAINER_UPDATE} | Animal Mind`,
        menuName: MENUS.TRAINER_UPDATE,
      },
    },
    {
      path: '/my-page',
      name: 'myPage',
      component: MyPage,
      meta: {
        title: () => `${MENUS.MY_PAGE} | Animal Mind`,
        menuName: MENUS.MY_PAGE,
      },
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ,
      meta: {
        title: () => `${MENUS.FAQ} | Animal Mind`,
        menuName: MENUS.FAQ,
      },
    },
    {
      path: '/service',
      name: 'Service',
      component: Service,
      meta: {
        title: () => `${MENUS.SERVICE} | Animal Mind`,
        menuName: MENUS.SERVICE,
      },
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
      meta: {
        title: () => 'Not Found | Animal Mind',
        menuName: '',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (store.state.jwt !== null && store.state.user === null) {
    setAxiosAuth(store.state.jwt).then(() => store.dispatch('getLoggedInUser'));
  }

  if (store.state.areas.length === 0) {
    store.dispatch('getAreas');
  }

  if (store.state.problemCategories.length === 0) {
    store.dispatch('getProblemCategories');
  }

  document.title = to.meta.title();
  // store.state.selectedMenu = to.meta.menuName;
  store.commit('SELECTED_MENU_CHANGED', { menuName: to.meta.menuName });
  next();
});

export default router;
