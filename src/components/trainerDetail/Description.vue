<template>
  <div class="_container">
    <div class="ql-editor _section">
      <div v-html="trainer.description"></div>
    </div>
    <v-divider></v-divider>
    <div class="ql-editor _section">
      <span class="_headline">경력</span>
      <div v-html="trainer.careerExperience"></div>
    </div>
    <v-divider></v-divider>
    <div class="ql-editor _section">
      <span class="_headline">자격증</span>
      <div v-html="trainer.license"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    trainer: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss" type="text/scss">
._container {
  margin: 1.4rem;

  ._section {
    margin-bottom: 1rem;

    ._headline {
      font-size: 1.4rem;
      font-weight: bold;
      margin-bottom: 0.9rem;
    }
  }
}
</style>
