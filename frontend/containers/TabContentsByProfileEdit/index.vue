<template>
  <div>
    <h3 class="pt-8 font-bold text-xl">プロフィール編集</h3>
    <div class="pt-4">
      <InputFormName />
    </div>
    <div class="pt-6">
      <RadioFromGender />
    </div>
    <div class="pt-6">
      <MultipleInputFormHelpList />
    </div>
    <div class="pt-6">
      <MultipleInputFormEmergencyList />
    </div>
    <div class="pt-8 pb-96">
      <AppButton background="button-primary" @buttonClick="buttonClick"
        >プロフィールを更新</AppButton
      >
    </div>
  </div>
</template>

<script>
import InputFormName from '@/containers/InputFormName'
import RadioFromGender from '@/containers/RadioFormGender'
import MultipleInputFormHelpList from '@/containers/MultipleInputFormHelpList'
import MultipleInputFormEmergencyList from '@/containers/MultipleInputFormEmergencyList'
import AppButton from '@/components/AppButton'

export default {
  name: 'TabContentsByProfileEdit',
  components: {
    InputFormName,
    RadioFromGender,
    MultipleInputFormHelpList,
    MultipleInputFormEmergencyList,
    AppButton
  },
  methods: {
    buttonClick() {}
  }
}
</script>
