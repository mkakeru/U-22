<template>
  <select
    v-model="currentItem"
    :class="[{ 'text-disable': currentItem.text === '未選択' }]"
    class="
      font-bold
      text-base text-primary
      px-4
      h-12
      appearance-none
      border border-gray-400
      focus:outline-none
      rounded
    "
  >
    <template v-for="selectItem in selectItems">
      <option
        :key="selectItem.id"
        :value="selectItem"
        :label="selectItem.text"
        :disabled="selectItem.text === '未選択'"
        :class="[{ 'text-disable': selectItem.text === '未選択' }]"
      >
        {{ selectItem.text }}
      </option>
    </template>
  </select>
</template>

<script>
export default {
  name: 'AppSelectbox',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: Object,
      default: () => {},
    },
    selectItems: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    currentItem: {
      get() {
        return this.value
      },
      set(e) {
        return this.$emit('change', e)
      },
    },
  },
}
</script>
