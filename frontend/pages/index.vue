<template>
  <div class="col-span-4">
    <Title />
    <AppInputForm
      title="名前"
      caption="※名前を入力してください"
      placeholder="山田 太郎"
    />
    <AppRadioForm title="性別" caption="※性別を選んでください" />
    <AppButton background="primary">利用者として登録</AppButton>
    <AppIconButton :src="plusIcon">項目を増やす</AppIconButton>
  </div>
</template>

<script>
import Title from '@/containers/Title'
import AppButton from '@/components/AppButton'
import AppInputForm from '@/components/AppInputForm'
import AppIconButton from '@/components/AppIconButton'
import PlusIcon from '@/assets/svg/plus-icon.svg'
import AppRadioForm from '@/components/AppRadioForm'

export default {
  components: { Title, AppButton, AppInputForm, AppRadioForm, AppIconButton },
  layout: 'default',
  data() {
    return {
      plusIcon: PlusIcon,
    }
  },
}
</script>
