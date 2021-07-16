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
  </div>
</template>

<script>
import Title from '@/containers/Title'
import AppButton from '@/components/AppButton'
import AppInputForm from '@/components/AppInputForm'
import AppRadioForm from '@/components/AppRadioForm'

export default {
  components: { Title, AppButton, AppInputForm, AppRadioForm },
  layout: 'default',
}
</script>
