<template>
  <v-card>
    <v-card-title>
      <span class="headline">간편가입 / 로그인</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 text-xs-center>
            <v-btn block>페이스북 계정으로 계속하기</v-btn>
          </v-flex>
          <v-flex xs12 text-xs-center>
            <v-btn block>네이버 계정으로 계속하기</v-btn>
          </v-flex>
          <v-flex xs12 text-xs-center>
            <v-btn block @click="switchToEmailLogin">이메일 계정으로 계속하기</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
import { EMAIL_LOGIN_FORM } from '@/library/login-modal';

export default {
  name: 'SimpleLoginForm',
  data() {
    return {};
  },

  methods: {
    ...mapActions(['switchLoginModalFormType']),
    switchToEmailLogin() {
      this.switchLoginModalFormType(EMAIL_LOGIN_FORM);
    },
  },
};
</script>

<style scoped lang="scss" type="text/scss"></style>
