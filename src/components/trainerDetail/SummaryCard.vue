<template>
  <v-card class="_container">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ trainer.title }}</h3>
        <span>{{ trainer.name }} 훈련사님</span>
        <div class="_area">
          <v-chip outline color="secondary" v-for="(area, i) in trainer.areas" :key="i">
            {{ areaName(area) }}
          </v-chip>
        </div>
        <div class="_rating">
          <span>전문성 평가</span>
          <v-rating
            :value="rating1"
            readonly
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$vuetify.icons.ratingFull"
            half-increments
          ></v-rating>
          <span>{{ rating1 }} / 5.0</span>
        </div>
        <div class="_rating">
          <span>친절도 평가</span>
          <v-rating
            :value="rating2"
            readonly
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$vuetify.icons.ratingFull"
            half-increments
          ></v-rating>
          <span>{{ rating2 }} / 5.0</span>
        </div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SummaryCard',
  props: {
    trainer: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['area']),
    rating1() {
      return 3.5;
    },
    rating2() {
      return 4.5;
    },
  },
  methods: {
    areaName(id) {
      const area = this.area(id);
      if (!area) {
        return '';
      }

      return area.name;
    },
  },
};
</script>

<style scoped lang="scss" type="text/scss">
._container {
  ._rating {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
