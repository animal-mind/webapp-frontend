<template>
  <vue-clip :options="options">
    <template slot="clip-uploader-action">
      <div>
        <div class="dz-message">
          <v-layout row justify-center>
            <v-avatar :size="160" color="grey lighten-4">
              <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
            </v-avatar>
          </v-layout>
        </div>
      </div>
      <div />
    </template>

    <template slot="clip-uploader-body" slot-scope="props">
      <div v-for="(file, key) in props.files" :key="key">
        <img v-bind:src="file.dataUrl" />
        {{ file.name }} {{ file.status }}
      </div>
    </template>
  </vue-clip>
</template>

<script>
export default {
  name: 'AvatarUpload',
  data() {
    return {
      options: {
        url: '/api/upload-image',
        paramName: 'image',
        headers: window.axios.defaults.headers.common,
      },
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss" type="text/scss"></style>
