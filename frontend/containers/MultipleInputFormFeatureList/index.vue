<template>
  <AppMultipleInputForm
    :value="_featureList"
    title="特徴"
    caption="※見つけてもらうためにあなたの特徴を入力してください"
    placeholder="特徴"
    :input-form-count="_inputFormCount"
    @buttonClick="addInputFormCount"
    @input="_setInputValues"
  />
</template>

<script>
import AppMultipleInputForm from '@/components/AppMultipleInputForm'
import { STATE_TYPES_OF_USER } from '@/store/user'

export default {
  name: 'MultipleInputFormFeatureList',
  components: {
    AppMultipleInputForm,
  },
  data() {
    return {
      inputFormCount: 1,
    }
  },
  computed: {
    _inputFormCount() {
      return this.inputFormCount
    },
    _featureList() {
      return this.$store.getters['user/featureList']
    },
  },
  methods: {
    addInputFormCount() {
      this.inputFormCount += 1
    },
    _setInputValues(payload) {
      this.$store.commit('user/setInputValues', {
        type: STATE_TYPES_OF_USER.featureList,
        payload,
      })
    },
  },
}
</script>
