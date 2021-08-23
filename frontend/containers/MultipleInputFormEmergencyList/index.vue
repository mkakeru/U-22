<template>
  <AppMultipleInputForm
    title="緊急連絡先"
    caption="※助けてほしいときにメッセージを送る相手です"
    @buttonClick="_addListCount"
  >
    <template #input>
      <div
        v-for="n in _emergencyListLength"
        :key="n"
        class="mt-4"
        :class="{ 'border-t pt-4': n !== 1 }"
      >
        <div>
          <AppLabeledInput
            input-label="名前"
            placeholder="山田 太郎"
            :value="_emergencyNameList[n - 1]"
            @input="_setInputValues($event, n - 1, 'emergencyNameList')"
          />
        </div>
        <div class="mt-4">
          <AppLabeledInput
            input-label="電話番号"
            placeholder="090-1234-5678"
            :value="_emergencyTelList[n - 1]"
            @input="_setInputValues($event, n - 1, 'emergencyTelList')"
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
    AppLabeledInput
  },
  // data() {
  //   return {
  //     inputFormCount: 1
  //   }
  // },
  computed: {
    _emergencyListLength() {
      return this.$store.getters['user/emergencyListLength']
    },
    _emergencyNameList() {
      return this.$store.getters['user/emergencyNameList']
    },
    _emergencyTelList() {
      return this.$store.getters['user/emergencyTelList']
    }
  },
  methods: {
    _addListCount() {
      this.$store.commit('user/addListCount', { type: 'emergencyContactList' })
    },
    _setInputValues(payload, index, payloadType) {
      this.$store.commit('user/setInputValues', {
        type: STATE_TYPES_OF_USER[payloadType],
        index,
        payload
      })
    }
  }
}
</script>
