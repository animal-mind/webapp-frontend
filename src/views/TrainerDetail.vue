<template>
  <v-container>
    <div v-if="trainerLoading">
      <v-progress-linear :indeterminate="true"></v-progress-linear>
    </div>
    <div v-else-if="!trainer"><span>훈련사 정보를 찾을 수 없습니다.</span></div>
    <div v-else class="_container">
      <summary-card :trainer="trainer"></summary-card>
      <description :trainer="trainer"></description>
      <gallery :trainer="trainer"></gallery>
      <comments :comments="comments"></comments>
      <reviews :reviews="reviews"></reviews>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import SummaryCard from '@/components/trainerDetail/SummaryCard';
import Gallery from '@/components/trainerDetail/Gallery';
import Comments from '@/components/trainerDetail/Comments';
import Description from '@/components/trainerDetail/Description';
import Reviews from '@/components/trainerDetail/Reviews';

export default {
  name: 'TrainerDetail',
  components: {
    SummaryCard,
    Gallery,
    Comments,
    Description,
    Reviews,
  },
  data() {
    return {
      trainerLoading: true,
    };
  },
  computed: {
    ...mapState({
      trainer: state => state.selectedTrainer.trainer,
      comments: state => state.selectedTrainer.comments,
      reviews: state => state.selectedTrainer.reviews,
    }),
  },
  methods: {
    ...mapActions(['getTrainerDetail', 'getTrainerComments', 'getTrainerReviews']),
    async fetchData(slug) {
      this.trainerLoading = true;
      if (this.trainer && this.trainer.slug === slug) {
        this.trainerLoading = false;
        return;
      }

      const response = await this.getTrainerDetail(slug);
      this.trainerLoading = false;
      if (response.status !== 200) {
        this.$toasted.global.error({ message: '데이터 로드 실패' });
        return;
      }

      this.getTrainerComments(slug);
      this.getTrainerReviews(slug);
    },
  },
  created() {
    this.fetchData(this.$route.params.slug);
  },
  watch: {
    $route(to) {
      this.fetchData(to.params.slug);
    },
  },
};
</script>

<style scoped lang="scss" type="text/scss">
._container {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
</style>
