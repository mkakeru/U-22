<template>
  <AppMultipleInputForm
    :value="_helpList"
    title="日常生活で助けてほしいこと"
    caption="※助けてほしいことを入力してください"
    placeholder="階段を上がるのがつらい"
    :input-form-count="_inputFormCount"
    @buttonClick="addInputFormCount"
    @input="_setInputValues"
  />
</template>

<script>
import AppMultipleInputForm from '@/components/AppMultipleInputForm'
import { STATE_TYPES_OF_USER } from '@/store/user'

export default {
  name: 'MultipleInputFormHelpList',
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
    _helpList() {
      return this.$store.getters['user/helpList']
    },
  },
  methods: {
    addInputFormCount() {
      this.inputFormCount += 1
    },
    _setInputValues(payload) {
      this.$store.commit('user/setInputValues', {
        type: STATE_TYPES_OF_USER.helpList,
        payload,
      })
    },
  },
}
</script>
