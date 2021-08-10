<template>
  <AppMultipleInputForm
    title="特徴"
    caption="※見つけてもらうためにあなたの特徴を入力してください"
    @buttonClick="addInputFormCount"
  >
    <template #input>
      <div v-for="n in _inputFormCount" :key="n" class="mt-4">
        <AppInput
          placeholder="特徴"
          :value="_featureList[n - 1]"
          @input="_setInputValues($event, n - 1)"
        />
      </div>
    </template>
  </AppMultipleInputForm>
</template>

<script>
import AppMultipleInputForm from '@/components/AppMultipleInputForm'
import AppInput from '@/components/AppInput'
import { STATE_TYPES_OF_USER } from '@/store/user'

export default {
  name: 'MultipleInputFormFeatureList',
  components: {
    AppMultipleInputForm,
    AppInput,
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
    _setInputValues(payload, index) {
      this.$store.commit('user/setInputValues', {
        type: STATE_TYPES_OF_USER.featureList,
        index,
        payload,
      })
    },
  },
}
</script>
