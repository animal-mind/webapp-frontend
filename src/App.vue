<template>
  <v-app>
    <layout> <router-view slot="content" /> </layout>
  </v-app>
</template>

<script>
import Layout from '@/components/layout/Layout';

export default {
  name: 'App',
  components: {
    Layout,
  },
};
</script>

<style scoped lang="scss" type="text/scss"></style>
