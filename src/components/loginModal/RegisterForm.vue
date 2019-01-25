<template>
  <v-card>
    <v-card-title> <span class="headline">회원가입</span> </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field prepend-icon="person" label="이름" required v-model="name"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              prepend-icon="email"
              label="이메일"
              required
              v-model="email"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              prepend-icon="lock"
              label="비밀번호"
              type="password"
              required
              v-model="password"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 text-xs-center>
            <v-btn block @click="submit">계정 만들기</v-btn>
          </v-flex>
          <v-flex xs12 text-xs-center>
            이미 가입하셨다면? <a @click="switchToLogin"><span>로그인</span></a>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
import { SIMPLE_LOGIN_FORM } from '@/library/login-modal';

export default {
  name: 'RegisterForm',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['switchLoginModalFormType', 'switchLoginModalStatus', 'registerUser']),
    switchToLogin() {
      this.switchLoginModalFormType(SIMPLE_LOGIN_FORM);
    },
    async submit() {
      if (this.name.length === 0 || this.email.length === 0 || this.password.length === 0) {
        return;
      }
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      try {
        const response = await this.registerUser(data);
        if (response.status !== 200) {
          this.$toasted.global.error({ message: '회원가입 실패' });
          return;
        }
        this.$toasted.global.success({ message: '회원가입이 완료되었습니다' });
        this.switchLoginModalStatus(false);
        this.$router.push({ path: '/trainers' });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped lang="scss" type="text/scss"></style>
