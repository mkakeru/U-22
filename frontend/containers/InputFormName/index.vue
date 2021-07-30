<template>
  <AppInputForm
    v-model="inputName"
    :title="title"
    :caption="caption"
    :placeholder="placeholder"
  />
</template>

<script>
import AppInputForm from '@/components/AppInputForm'

export default {
  name: 'InputFormName',
  components: {
    AppInputForm,
  },
  data() {
    return {
      title: '名前',
      caption: '※名前を入力してください',
      placeholder: '山田 太郎',
      inputName: '',
    }
  },
}
</script>
