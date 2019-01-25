<template>
  <v-menu open-on-hover bottom :close-on-content-click="false" offset-y>
    <v-btn flat slot="activator"> {{ label }} <v-icon>arrow_drop_down</v-icon> </v-btn>
    <v-card flat :width="cardWidth">
      <v-layout row wrap>
        <v-flex
          v-bind:class="{
            xs3: columnNumber === 4,
            xs4: columnNumber === 3,
            xs6: columnNumber === 2,
            xs12: columnNumber === 1,
          }"
          v-for="item in items"
          :key="item.id"
        >
          <v-sheet tile class="_btn">
            <v-card-text @click="selectItem(item.id)">
              <v-icon small v-if="isSelectedItem(item.id)">done</v-icon>
              <span v-bind:class="{ _option: !isSelectedItem(item.id) }">
                {{ item.name }}
              </span>
            </v-card-text>
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-card>
  </v-menu>
</template>

<script>
import { addOrRemoveItem, checkIfItemExists } from '@/library/array';

export default {
  name: 'FilterSelect',
  props: {
    value: {
      type: Array,
      required: false,
      default: () => [],
    },
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    label: {
      type: String,
      default: '선택하세요',
    },
    cardWidth: {
      type: Number,
      default: 360,
    },
    columnNumber: {
      type: Number,
      default: 3,
    },
    multi: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    selectItem(id) {
      this.value = addOrRemoveItem(this.value, id, !this.multi);
    },
    isSelectedItem(id) {
      return checkIfItemExists(this.value, id);
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss" type="text/scss">
._btn {
  /*height: 4rem;*/
  &:hover {
    cursor: pointer;
    background-color: #e1e1e1;
  }
}
._option {
  margin-left: 1.4rem;
}
</style>
