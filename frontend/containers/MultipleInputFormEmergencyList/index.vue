<template>
  <AppMultipleInputForm
    title="緊急連絡先"
    caption="※助けてほしいときにメッセージを送る相手です"
    @buttonClick="addInputFormCount"
  >
    <template #input>
      <div v-for="n in _inputFormCount" :key="n" class="mt-4">
        <div>
          <AppLabeledInput
            input-label="名前"
            placeholder="山田 太郎"
            :value="_emergencyContactList[n - 1].name || _inputValue"
            @input="_setInputValues($event, n - 1, 'emergencyNameList')"
          />
        </div>
        <div class="mt-4">
          <AppLabeledInput
            input-label="電話番号"
            placeholder="090-1234-5678"
            :value="_emergencyContactList[n - 1].tel || _inputValue"
            @input="_setInputValues($event, n - 1, 'emergencyContactList')"
          />
        </div>
      </div>
    </template>
  </AppMultipleInputForm>
</template>

<script>
import AppMultipleInputForm from '@/components/AppMultipleInputForm'
import AppLabeledInput from '@/components/AppLabeledInput'
import { STATE_TYPES_OF_USER } from '@/store/user'

export default {
  name: 'MultipleInputFormEmergencyList',
  components: {
    AppMultipleInputForm,
    AppLabeledInput,
  },
  data() {
    return {
      inputValue: '',
      inputFormCount: 1,
    }
  },
  computed: {
    _inputValue() {
      return this.inputValue
    },
    _inputFormCount() {
      return this.inputFormCount
    },
    _emergencyNameList() {
      return this.$store.getters['user/emergencyNameList']
    },
    _emergencyContactList() {
      return this.$store.getters['user/emergencyContactList']
    },
  },
  methods: {
    addInputFormCount() {
      this.inputFormCount += 1
    },
    _setInputValues(payload, index, payloadType) {
      this.$store.commit('user/setInputValues', {
        type: STATE_TYPES_OF_USER.payloadType,
        index,
        payload: [
          {
            ...this._emergencyContactList[index],
            name: payloadType === 'name' ? payload : '',
            tel: payloadType === 'tel' ? payload : '',
          },
        ],
      })
    },
  },
}
</script>
