<template>
  <v-container>
    <trainer-wizard></trainer-wizard>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TrainerWizard from '@/components/trainerWizard';

export default {
  name: 'TrainerEdit',
  components: {
    TrainerWizard,
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
      user: state => state.user,
    }),
  },
  // mounted() {
  //   this.fillFields();
  // },
  // watch: {
  //   user() {
  //     this.fillFields();
  //   },
  // },
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
