<template>
  <div>
    <div class="pt-8 mb-4">
      <AppSectionText>プロフィール編集</AppSectionText>
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
      <ConfirmInputFieldsButton
        button-text="編集内容を確認"
        to-router-name="hitokoe-profile-edit-check"
      />
    </div>

    <div :class="commonStyle">
      <AppButton background="button-secondary" @buttonClick="backPage">
        やめる
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppSectionText from '@/components/AppSectionText'
import RadioFormGender from '@/containers/RadioFormGender'
import SelectboxFormAge from '@/containers/SelectboxFormAge'
import SelectboxFormHeight from '@/containers/SelectboxFormHeight'
import MultipleInputFormHelpList from '@/containers/MultipleInputFormHelpList'
import MultipleInputFormFeatureList from '@/containers/MultipleInputFormFeatureList'
import MultipleInputFormEmergencyList from '@/containers/MultipleInputFormEmergencyList'
import InputFormFeaturePhoto from '@/containers/InputFormFeaturePhoto'
import ConfirmInputFieldsButton from '@/containers/ConfirmInputFieldsButton'
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppSectionText,
    RadioFormGender,
    SelectboxFormAge,
    SelectboxFormHeight,
    MultipleInputFormHelpList,
    MultipleInputFormFeatureList,
    MultipleInputFormEmergencyList,
    InputFormFeaturePhoto,
    ConfirmInputFieldsButton,
    AppButton
  },
  layout: 'main',
  middleware: 'userInfomation',
  computed: {
    commonStyle() {
      return 'mb-6'
    }
  },
  methods: {
    backPage() {
      this.$router.back()
    }
  }
}
</script>
