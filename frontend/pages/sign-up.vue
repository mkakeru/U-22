<template>
  <div class="col-span-4">
    <AppInputForm
      title="名前"
      caption="※名前を入力してください"
      placeholder="山田 太郎"
    />
    <AppRadioForm title="性別" caption="※性別を選んでください" />
    <AppButton background="primary">利用者として登録</AppButton>
    <AppIconButton background="button-secondary" :src="plusIcon">
      項目を増やす
    </AppIconButton>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppInputForm from '@/components/AppInputForm'
import AppIconButton from '@/components/AppIconButton'
import AppRadioForm from '@/components/AppRadioForm'
import PlusIcon from '@/assets/svg/plus-icon.svg'

export default {
  components: {
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
}
</script>
