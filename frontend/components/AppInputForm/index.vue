<template>
  <AppForm :title="title" :caption="caption">
    <AppInput v-model="inputValue" :placeholder="placeholder" />
  </AppForm>
</template>

<script>
import AppForm from '@/components/AppForm'
import AppInput from '@/components/AppInput'

export default {
  components: { AppForm, AppInput },
  props: {
    value: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'title',
    },
    caption: {
      type: String,
      default: 'caption',
    },
    placeholder: {
      type: String,
      default: 'placeholder',
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(inputValue) {
        this.$emit('change', inputValue)
      },
    },
  },
}
</script>
