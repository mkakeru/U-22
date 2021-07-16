<template>
  <AppForm :title="title" :caption="caption">
    <AppRadio :radio-text="radioText" />
  </AppForm>
</template>

<script>
import AppForm from '@/components/AppForm'
import AppRadio from '@/components/AppRadio'

export default {
  components: { AppForm, AppRadio },
  props: {
    title: {
      type: String,
      default: 'title',
    },
    caption: {
      type: String,
      default: 'caption',
    },
    radioText: {
      type: String,
      default: 'radioText',
    },
  },
}
</script>
