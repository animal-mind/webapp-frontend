<template>
  <div>
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-1">
          <v-flex xs8 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">
                  아무리 교육해도 고쳐지지 않는다면,<br />
                  반려견 행동 전문가에게 상담해보세요.
                </div>
              </v-card-title>
              <v-card-text>
                <v-btn class="blue" dark large @click="goToTrainers">
                  반려견 행동 전문가 찾기
                </v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs16 sm8>
            <img src="images/img3-a9190388.jpg" width="100%" />
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section>
      <top-reviews></top-reviews>
    </section>
  </div>
</template>

<script>
import TopReviews from '@/components/topReviews';

export default {
  name: 'Home',
  components: {
    TopReviews,
  },
  methods: {
    goToRegister() {
      this.$router.push({ path: '/register' });
    },
    goToTrainers() {
      this.$router.push({ path: '/trainers' });
    },
  },
};
</script>

<style scoped lang="scss" type="text/scss"></style>
