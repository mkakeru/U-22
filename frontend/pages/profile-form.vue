<template>
  <div class="col-span-4">
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
      <AppButton background="primary">利用者として登録</AppButton>
    </div>

    <div>
      <AppIconButton background="button-secondary" :src="plusIcon">
        項目を増やす
      </AppIconButton>
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
import AppButton from '@/components/AppButton'
import AppIconButton from '@/components/AppIconButton'
import PlusIcon from '@/assets/svg/plus-icon.svg'

export default {
  components: {
    Title,
    AppSectionText,
    InputFormName,
    RadioFormGender,
    SelectboxFormAge,
    SelectboxFormHeight,
    MultipleInputFormHelpList,
    AppButton,
    AppIconButton,
  },
  layout: 'default',
  data() {
    return {
      plusIcon: PlusIcon,
    }
  },
  computed: {
    commonStyle() {
      return 'mb-6'
    },
  },
}
</script>
