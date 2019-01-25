<template>
  <v-layout row justify-center>
    <v-sheet class="_container" tile width="90%" :min-width="300" :max-width="800">
      <v-layout row justify-space-between>
        <v-flex xs8>
          <v-layout row>
            <v-text-field v-model="name" :counter="10" label="이름" required></v-text-field>
          </v-layout>
          <v-layout row>
            <v-flex xs10>
              <v-text-field v-model="email" label="이메일" required></v-text-field>
            </v-flex>
            <v-flex xs2> <v-btn>이메일인증</v-btn> </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs10>
              <v-text-field
                v-model="phoneNumber"
                label="휴대폰번호"
                required
                hint="번호만 입력하세요"
                persistent-hint
                mask="############"
              ></v-text-field>
            </v-flex>
            <v-flex xs2> <v-btn>휴대폰인증</v-btn> </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs3 hidden-xs-only> <avatar-upload></avatar-upload> </v-flex>
      </v-layout>
      <v-layout>
        <v-flex text-xs-center>
          <v-btn outline color="green" @click="submit">저장</v-btn>
        </v-flex>
      </v-layout>
    </v-sheet>
  </v-layout>
</template>

<script>
import AvatarUpload from '@/components/avatarUpload';

export default {
  name: '',
  components: {
    AvatarUpload,
  },
  data() {
    return {
      name: '',
      email: '',
      phoneNumber: '',
    };
  },
  methods: {
    submit() {},
  },
};
</script>

<style scoped lang="scss" type="text/scss">
._container {
  padding: 0px;
}
</style>
