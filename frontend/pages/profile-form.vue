<template>
  <div class="col-span-4">
    <div class="pt-12 pb-8">
      <Title />
    </div>
    <div class="mb-4">
      <AppSectionText>プロフィール入力フォーム</AppSectionText>
    </div>

    <div :class="commonStyle">
      <AppInputForm
        title="名前"
        caption="※名前を入力してください"
        placeholder="山田 太郎"
      />
    </div>

    <div :class="commonStyle">
      <AppRadioForm title="性別" caption="※性別を選んでください" />
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
import AppButton from '@/components/AppButton'
import AppInputForm from '@/components/AppInputForm'
import AppIconButton from '@/components/AppIconButton'
import AppRadioForm from '@/components/AppRadioForm'
import PlusIcon from '@/assets/svg/plus-icon.svg'

export default {
  components: {
    Title,
    AppSectionText,
    AppButton,
    AppInputForm,
    AppIconButton,
    AppRadioForm,
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
