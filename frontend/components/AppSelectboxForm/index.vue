<template>
  <AppForm :title="title" :caption="caption">
    <AppSelectbox
      v-model="currentItem"
      :name="name"
      :select-items="selectItems"
    />
  </AppForm>
</template>

<script>
import AppForm from '@/components/AppForm'
import AppSelectbox from '@/components/AppSelectbox'

export default {
  name: 'AppSelectboxForm',
  components: {
    AppForm,
    AppSelectbox,
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    title: {
      type: String,
      default: 'title',
    },
    caption: {
      type: String,
      default: 'caption',
    },
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
      set(item) {
        this.$emit('change', item)
      },
    },
  },
}
</script>
