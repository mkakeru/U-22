<template>
  <div class="col-span-4">
    <div class="pt-12 pb-8">
      <Title />
    </div>
    <div class="mb-4">
      <AppSectionText>プロフィール入力フォーム</AppSectionText>
    </div>

    <div :class="commonStyle">
      <AppConfirmInputDetail title="名前" form-type="input" :value="userName" />
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
import AppConfirmInputDetail from '@/components/AppConfirmInputDetail'
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
    AppConfirmInputDetail,
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
  data() {
    return {
      userName: ''
    }
  },
  computed: {
    commonStyle() {
      return 'mb-6'
    }
  },
  async mounted() {
    const _user = await this.$api.user.getUserName()
    this.userName = _user
    this.$store.commit('user/setInputValue', _user)
  },
  methods: {
    goToCheckPage() {
      this.$router.push({ path: '/sign_up/check' })
    }
  }
}
</script>
