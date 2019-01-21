<template>
  <v-container>
    <v-layout row wrap align-center>
      <trainer-search-bar></trainer-search-bar>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap align-center justify-space-between>
      <v-flex md6 xs12 v-for="trainer in trainers" :key="trainer.id" px-2>
        <trainer-box :trainer="trainer"></trainer-box>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TrainerBox from '../components/trainerBox';
import TrainerSearchBar from '../components/trainerSearchBar';

export default {
  name: 'Trainers',
  components: {
    TrainerBox,
    TrainerSearchBar,
  },
  methods: {
    ...mapActions(['getTrainers']),
    async getTrainersEventTrigger() {
      const filterValues = [];
      const response = await this.getTrainers(filterValues);
      if (response.status !== 200) {
        this.$toasted.global.error({ message: '데이터 로드 실패' });
        return;
      }

      this.$toasted.global.success({ message: '데이터 로드 성공' });
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({ trainers: state => state.trainers }),
  },
  mounted() {
    this.getTrainersEventTrigger();
  },
};
</script>

<style scoped lang="scss" type="text/scss"></style>
