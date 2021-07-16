<template>
  <AppForm :title="title" :caption="caption">
    <AppInput :placeholder="placeholder" />
  </AppForm>
</template>

<script>
import AppForm from '@/components/AppForm'
import AppInput from '@/components/AppInput'

export default {
  components: { AppForm, AppInput },
  props: {
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
}
</script>
