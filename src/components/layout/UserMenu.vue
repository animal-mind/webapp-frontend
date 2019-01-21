<template>
  <v-toolbar-items class="user-menu">
    <template v-if="!isLoggedIn">
      <v-btn color="info" @click="openLoginModal"> 로그인/회원가입 </v-btn>
      <login-modal v-model="loginModalStatus"></login-modal>
    </template>
    <template v-else>
      <v-btn v-if="!isTrainer" flat color="info" to="/trainer-edit"> 전문가 등록 </v-btn>
      <v-btn v-if="!isTrainer" flat color="info" to="/mypage"> 마이페이지 </v-btn>
      <v-menu bottom left>
        <v-btn slot="activator" icon> <v-icon>person</v-icon> </v-btn>
        <v-list dense>
          <v-list-tile :to="profileLink">
            <v-list-tile-title>{{ profileText }}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logoutClick">
            <v-list-tile-title>로그아웃</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </template>
  </v-toolbar-items>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import LoginModal from '../loginModal/LoginModal';

export default {
  name: 'UserMenu',
  data() {
    return {};
  },
  components: {
    LoginModal,
  },
  computed: {
    ...mapState({
      loginModalStatus: state => state.loginModalStatus,
      user: state => state.user,
    }),
    profileLink() {
      return this.isTrainer ? '/trainer-edit' : 'profile';
    },
    profileText() {
      return this.isTrainer ? '전문가 정보 업데이트' : '프로필 업데이트';
    },
    isLoggedIn() {
      return this.user !== null;
    },
    userName() {
      if (this.user !== null) {
        return this.user.name;
      }
      return '';
    },
    isTrainer() {
      return this.user.trainer_values !== null && typeof this.user.trainer_values !== 'undefined';
    },
  },
  methods: {
    ...mapActions(['logUserOut', 'switchLoginModalStatus']),
    openLoginModal() {
      this.switchLoginModalStatus(true);
    },
    async logoutClick() {
      try {
        await this.logUserOut();
        this.$toasted.global.info({ message: '로그아웃 되었습니다' });
        this.$router.push({ path: '/' });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped lang="scss" type="text/scss">
.user-menu {
  align-items: center;
  a {
    color: gray;

    & :hover {
      color: black;
      text-decoration: none;
    }
  }
}
</style>
