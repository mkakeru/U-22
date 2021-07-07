<template>
  <div class="col-span-4">
    <Title />
    <AppButton />
  </div>
</template>

<script>
import Title from '@/containers/Title'
import AppButton from '@/components/AppButton'

export default {
  components: { Title, AppButton },
  layout: 'default',
}
</script>
