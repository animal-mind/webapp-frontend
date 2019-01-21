<template>
  <v-toolbar class="top-navigation" white>
    <v-toolbar-title class="_logo">
      <router-link to="/">
        <img src="../../assets/logo_transparent.png" alt="Animal Mind" height="40" />
      </router-link>
    </v-toolbar-title>
    <v-divider class="mx-3" inset vertical></v-divider>
    <span class="_currentMenu">{{ selectedMenu }}</span>
    <v-spacer></v-spacer>
    <v-toolbar-items class="_menu hidden-xs-only">
      <v-btn flat to="/trainers"> 반려견행동전문가 찾기</v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="_menu hidden-xs-only">
      <v-btn flat to="/faq"> 자주하는 질문</v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="_menu hidden-xs-only">
      <v-btn flat to="/service"> 서비스 소개</v-btn>
    </v-toolbar-items>
    <user-menu class="hidden-xs-only"></user-menu>
    <v-toolbar-side-icon class="_mobile-menu hidden-sm-and-up"> </v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex';
import UserMenu from './UserMenu';

export default {
  name: 'TopNavigation',
  components: {
    UserMenu,
  },
  computed: {
    ...mapState({
      selectedMenu: state => state.selectedMenu,
    }),
  },
};
</script>

<style scoped lang="scss" type="text/scss">
.top-navigation {
  ._logo {
    img {
      display: flex;
    }
  }

  ._menu {
    color: #484848;
    a:hover {
      border-bottom: 2px solid black;
      text-decoration: none;
    }
  }

  ._currentMenu {
    color: gray;
  }
}
</style>
