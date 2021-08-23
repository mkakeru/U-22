<template>
  <div class="responsive-grid-style">
    <div class="pt-12 pb-8">
      <Title />
    </div>
    <div class="mb-4">
      <AppSectionText>プロフィール入力フォーム</AppSectionText>
    </div>

    <div :class="commonStyle">
      <InputFormName />
    </div>

    <div :class="commonStyle">
      <RadioFormGender />
    </div>

    <div :class="commonStyle">
      <SelectboxFormAge />
    </div>

    <div :class="commonStyle">
      <SelectboxFormHeight />
    </div>

    <div :class="commonStyle">
      <MultipleInputFormHelpList />
    </div>

    <div :class="commonStyle">
      <MultipleInputFormEmergencyList />
    </div>

    <div :class="commonStyle">
      <MultipleInputFormFeatureList />
    </div>

    <div :class="commonStyle">
      <InputFormFeaturePhoto />
    </div>

    <div :class="commonStyle">
      <ConfirmInputFieldsButton />
    </div>
  </div>
</template>

<script>
import Title from '@/containers/Title'
import AppSectionText from '@/components/AppSectionText'
import InputFormName from '@/containers/InputFormName'
import RadioFormGender from '@/containers/RadioFormGender'
import SelectboxFormAge from '@/containers/SelectboxFormAge'
import SelectboxFormHeight from '@/containers/SelectboxFormHeight'
import MultipleInputFormHelpList from '@/containers/MultipleInputFormHelpList'
import MultipleInputFormFeatureList from '@/containers/MultipleInputFormFeatureList'
import MultipleInputFormEmergencyList from '@/containers/MultipleInputFormEmergencyList'
import InputFormFeaturePhoto from '@/containers/InputFormFeaturePhoto'
import ConfirmInputFieldsButton from '@/containers/ConfirmInputFieldsButton'

export default {
  components: {
    Title,
    AppSectionText,
    InputFormName,
    RadioFormGender,
    SelectboxFormAge,
    SelectboxFormHeight,
    MultipleInputFormHelpList,
    MultipleInputFormFeatureList,
    MultipleInputFormEmergencyList,
    InputFormFeaturePhoto,
    ConfirmInputFieldsButton
  },
  layout: 'default',
  middleware: ['serverRedirect'],
  computed: {
    commonStyle() {
      return 'mb-6'
    }
  },
  methods: {
    goToCheckPage() {
      this.$router.push({ path: '/sign_up/check' })
    }
  }
}
</script>
