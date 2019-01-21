<template>
  <v-card class="my-3" hover @click="goToTrainerPage">
    <v-carousel height="245">
      <v-carousel-item v-for="(item, i) in pictures" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <v-card-text>
      <div class="title">{{ trainer.title }}</div>
      <v-layout row wrap align-center>
        <v-flex>
          <v-avatar>
            <img v-if="trainer.profileImage" :src="trainer.profileImage" :alt="trainer.name" />
            <v-icon v-else>person</v-icon>
          </v-avatar>
          <span class="body-2">{{ trainer.name }}</span>
        </v-flex>
        <v-flex text-xs-right>
          <v-chip outline label color="secondary" v-for="(area, i) in trainer.areas" :key="i">
            {{ areaName(area) }}
          </v-chip>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center>
        <v-flex xs4 text-xs-left>
          <div>
            자격증
          </div>
        </v-flex>
        <v-flex xs4 text-xs-left>
          <div>
            경력!!
          </div>
        </v-flex>
        <v-flex xs4 text-xs-right>
          <v-chip label outline color="blue">
            30,000원~
          </v-chip>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-layout row wrap justify-space-between>
        <div>아직 후기가 없습니다.</div>
        <div>
          전문성 평가 {{ rating1 }} / 5.0
          <v-rating
            :value="rating1"
            readonly
            color="yellow darken-3"
            background-color="yellow darken-3"
            half-increments
            dense
            small
          ></v-rating>
        </div>
        <div>
          친절도 평가 {{ rating2 }} / 5.0
          <v-rating
            :value="rating2"
            readonly
            color="yellow darken-3"
            background-color="yellow darken-3"
            half-increments
            dense
            small
          ></v-rating>
        </div>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TrainerBox',
  props: {
    trainer: {
      type: Object,
      required: true,
      default: null,
    },
  },
  computed: {
    ...mapGetters(['area']),
    pictures() {
      return [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ];
    },
    rating1() {
      return 3.7;
    },
    rating2() {
      return 4.2;
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
    goToTrainerPage() {
      this.$router.push({
        name: 'trainer',
        params: { slug: this.trainer.slug },
      });
    },
  },
};
</script>

<style scoped lang="scss" type="text/scss"></style>
