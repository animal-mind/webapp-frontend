<template>
  <v-container app>
    <top-navigation class="_nav" :user="user"></top-navigation>
    <v-content class="_content">
      <div class="router-view"><slot name="content" /></div>
    </v-content>
    <Footer></Footer>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import TopNavigation from './TopNavigation';
import Footer from './Footer';

export default {
  name: 'Layout',
  components: {
    Footer,
    TopNavigation,
  },
  computed: {
    ...mapState({ user: state => state.user }),
  },
};
</script>

<style scoped lang="scss" type="text/scss">
._content {
  min-height: 300px;
}
</style>
