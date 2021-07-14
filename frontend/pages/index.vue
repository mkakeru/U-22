<template>
  <div class="col-span-4">
    <Title />
    <AppForm :title="title" :caption="caption">
      <AppInput placeholder="山田 太郎" />
    </AppForm>
    <AppButton background="primary">利用者として登録</AppButton>
  </div>
</template>

<script>
import Title from '@/containers/Title'
import AppForm from '@/components/AppForm'
import AppButton from '@/components/AppButton'
import AppInput from '@/components/AppInput'

export default {
  components: { Title, AppForm, AppButton, AppInput },
  layout: 'default',
  data() {
    return {
      title: '名前',
      caption: '※名前を入力してください',
    }
  },
}
</script>
