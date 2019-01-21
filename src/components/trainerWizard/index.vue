<template>
  <div>
    <v-stepper non-linear>
      <v-stepper-header>
        <v-stepper-step editable step="1">
          전문가 프로필
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step editable step="2"> 훈련프로그램 </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step editable step="3"> 자격증 및 경력 </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step editable step="4">
          등록 요청
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1" class="_content">
          <profile v-model="profileData"></profile>
        </v-stepper-content>

        <v-stepper-content step="2" class="_content">
          <detail v-model="detailData"></detail>
        </v-stepper-content>

        <v-stepper-content step="3" class="_content">
          <qualification v-model="qualificationData"></qualification>
        </v-stepper-content>

        <v-stepper-content step="4" class="_content">
          <apply v-model="applyData"></apply>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import Profile from './profile';
import Detail from './detail';
import Qualification from './qualification';
import Apply from './apply';

export default {
  name: 'TrainerWizard',
  components: {
    Profile,
    Detail,
    Qualification,
    Apply,
  },
  data() {
    return {
      profileData: {},
      detailData: {},
      qualificationData: {},
      applyData: {},
    };
  },
};
</script>

<style scoped lang="scss" type="text/scss">
._content {
  padding: 24px 0px 16px;
}
</style>
