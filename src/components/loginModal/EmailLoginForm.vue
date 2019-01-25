<template>
  <v-card>
    <v-card-title> <span class="headline">이메일로 로그인</span> </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
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
            <v-btn block @click="submit">로그인</v-btn>
          </v-flex>
          <v-flex xs12 text-xs-center>
            <a @click="switchToPasswordReset"><span>비밀번호를 잊으셨나요?</span></a>
          </v-flex>
          <v-flex xs12 text-xs-center>
            <span>애니멀마인드가 처음이신가요?</span>
            <a @click="switchToRegister"><span>회원가입</span></a>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
import { PASSWORD_RESET_FORM, REGISTER_FORM } from '@/library/login-modal';

export default {
  name: 'EmailLoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['logUserIn', 'switchLoginModalStatus', 'switchLoginModalFormType']),
    switchToRegister() {
      this.switchLoginModalFormType(REGISTER_FORM);
    },
    switchToPasswordReset() {
      this.switchLoginModalFormType(PASSWORD_RESET_FORM);
    },
    async submit() {
      if (this.email.length === 0 || this.password.length === 0) {
        return;
      }
      const data = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await this.logUserIn(data);
        if (response.status !== 200) {
          this.$toasted.global.error({ message: '로그인 실패' });
          return;
        }
        this.$toasted.global.success({ message: '로그인 되었습니다' });
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
