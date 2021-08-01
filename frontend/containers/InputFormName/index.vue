<template>
  <div>
    <AppInputForm
      :value="userName"
      :title="title"
      :caption="caption"
      :placeholder="placeholder"
      @input="handleInput"
    />
  </div>
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
    }
  },
  computed: {
    userName() {
      return this.$store.getters['user/userName']
    },
  },
  methods: {
    handleInput(inputValue) {
      this.$store.commit('user/setInputValue', inputValue)
    },
  },
}
</script>
