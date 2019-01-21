<template>
  <v-card>
    <v-card-title> <span class="headline">비밀번호 재설정</span> </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field
              prepend-icon="email"
              label="가입한 이메일"
              required
              v-model="email"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 text-xs-center> <v-btn block>확인</v-btn> </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PasswordResetForm',
  data() {
    return {
      email: '',
    };
  },
};
</script>

<style scoped lang="scss" type="text/scss"></style>
