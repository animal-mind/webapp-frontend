<template>
  <v-dialog :value="value" @input="emitCloseEvent" max-width="600px">
    <email-login-form v-if="isEmailLoginForm"></email-login-form>
    <register-form v-else-if="isRegisterForm"></register-form>
    <password-reset-form v-else-if="isPasswordResetForm"></password-reset-form>
    <simple-login-form v-else-if="isSimpleLoginForm"></simple-login-form>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import EmailLoginForm from './EmailLoginForm';
import RegisterForm from './RegisterForm';
import PasswordResetForm from './PasswordResetForm';
import SimpleLoginForm from './SimpleLoginForm';
import {
  EMAIL_LOGIN_FORM,
  PASSWORD_RESET_FORM,
  REGISTER_FORM,
  SIMPLE_LOGIN_FORM,
} from '../../library/login-modal';

export default {
  name: 'LoginModal',
  components: {
    SimpleLoginForm,
    PasswordResetForm,
    RegisterForm,
    EmailLoginForm,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      loginModalStatus: state => state.loginModalStatus,
      loginModalFormType: state => state.loginModalFormType,
    }),
    isEmailLoginForm() {
      return this.loginModalFormType === EMAIL_LOGIN_FORM;
    },
    isRegisterForm() {
      return this.loginModalFormType === REGISTER_FORM;
    },
    isPasswordResetForm() {
      return this.loginModalFormType === PASSWORD_RESET_FORM;
    },
    isSimpleLoginForm() {
      return this.loginModalFormType === SIMPLE_LOGIN_FORM;
    },
  },
  props: {
    value: {
      default: false,
    },
  },
  methods: {
    ...mapActions(['switchLoginModalStatus']),
    emitCloseEvent($event) {
      if ($event === false) {
        this.switchLoginModalStatus(false);
      }
    },
  },
};
</script>

<style scoped lang="scss" type="text/scss"></style>
