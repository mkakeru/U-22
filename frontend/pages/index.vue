<template>
  <div class="col-span-4">
    <Title />
    <AppForm />
    <AppButton />
  </div>
</template>

<script>
import Title from '@/containers/Title'
import AppForm from '@/components/AppForm'
import AppButton from '@/components/AppButton'

export default {
  components: { Title, AppForm, AppButton },
  layout: 'default',
}
</script>
