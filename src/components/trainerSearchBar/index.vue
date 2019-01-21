<template>
  <v-layout row align-center>
    <div>
      <filter-select
        v-model="selectedCities"
        :items="cityList"
        label="지역"
        :card-width="380"
        :column-number="3"
      ></filter-select>
      <filter-select
        v-model="selectedProblemCategories"
        :items="problemCategories"
        label="문제행동"
        :card-width="260"
        :column-number="2"
      ></filter-select>
    </div>
    <div></div>
    <v-spacer></v-spacer>
    <div>
      <filter-select
        v-model="selectedSortItem"
        :items="sortItems"
        label="정렬"
        :card-width="120"
        :column-number="1"
        :multi="false"
      ></filter-select>
    </div>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import FilterSelect from '../filterSelect';

export default {
  name: 'TrainerSearchBar',
  components: {
    FilterSelect,
  },
  data() {
    return {
      sortItems: [
        { id: 1, name: '낮은 가격 순' },
        { id: 2, name: '높은 가격 순' },
        { id: 3, name: '후기 개수 순' },
        { id: 4, name: '평점 순' },
      ],
      selectedCities: [],
      selectedProblemCategories: [],
      selectedSortItem: [],
    };
  },
  computed: {
    ...mapState({
      cityList: state =>
        state.areas.map(area => ({ id: area.id, code: area.code, name: area.name })),
      problemCategories: state => state.problemCategories,
    }),
  },
  methods: {},
};
</script>

<style scoped lang="scss" type="text/scss"></style>
