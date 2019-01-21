<template>
  <v-card>
    <v-card-text>
      <form class="container">
        <div class="_field">
          <avatar-upload></avatar-upload>
        </div>
        <div class="_field">
          <div class="_field-name">이름</div>
          <v-text-field
            v-model="name"
            :counter="10"
            required
            solo
            hint="검색화면에 표시되는 항목입니다."
            persistent-hint
          ></v-text-field>
        </div>
        <div class="_field">
          <div class="_field-name">한 줄 설명</div>
          <v-text-field
            v-model="title"
            :counter="30"
            required
            solo
            hint="검색화면에 표시되는 항목입니다."
            persistent-hint
          ></v-text-field>
        </div>
        <div class="_field">
          <div class="_field-name">상세설명</div>
          <vue-editor v-model="description"></vue-editor>
        </div>
        <div class="_field">
          <div class="_field-name">경력</div>
          <vue-editor v-model="careerExperience"></vue-editor>
        </div>
        <div class="_field">
          <div class="_field-name">자격증</div>
          <vue-editor v-model="license"></vue-editor>
        </div>
        <div class="_field">
          <div class="_field-name">출장 훈련 가능 지역</div>
          <v-select
            :items="cityList"
            item-text="name"
            item-value="id"
            v-model="areas"
            multiple
            chips
            hint="출장 훈련이 가능한 지역을 모두 선택하세요."
            persistent-hint
            solo
          ></v-select>
        </div>
      </form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn outline color="green" @click="saveData">등록하기</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AvatarUpload from '../components/avatarUpload';

export default {
  name: 'TrainerEdit',
  components: {
    AvatarUpload,
  },
  data() {
    return {
      name: '',
      title: '',
      description: '',
      careerExperience: '',
      license: '',
      areas: [],
    };
  },
  computed: {
    ...mapState({
      cityList: state =>
        state.areas.map(area => ({ id: area.id, code: area.code, name: area.name })),
      user: state => state.user,
    }),
  },
  mounted() {
    this.fillFields();
  },
  watch: {
    user() {
      this.fillFields();
    },
  },
  methods: {
    ...mapActions(['saveTrainer']),
    fillFields() {
      if (this.user === null) {
        return;
      }
      this.name = this.user.name;
      if (this.user.trainer_values === null) {
        return;
      }
      this.title = this.user.trainer_values.title || '';
      this.description = this.user.trainer_values.description || '';
      this.careerExperience = this.user.trainer_values.careerExperience || '';
      this.license = this.user.trainer_values.license || '';
      this.areas = this.user.trainer_values.areas || '';
    },
    async saveData() {
      const data = {
        name: this.name,
        title: this.title,
        description: this.description,
        careerExperience: this.careerExperience,
        license: this.license,
        areas: this.areas,
      };

      const response = await this.saveTrainer(data);
      if (response.status !== 200) {
        this.$toasted.global.error({ message: '전문가 등록 실패' });
        return;
      }
      this.$toasted.global.success({
        message: '전문가 정보가 등록 되었습니다',
      });
      this.$router.push({ path: '/trainers' });
    },
  },
};
</script>

<style scoped lang="scss" type="text/scss">
.container {
  ._field {
    margin-bottom: 1.4rem;
    &:last-child {
      margin-bottom: 0.7rem;
    }

    ._field-name {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
