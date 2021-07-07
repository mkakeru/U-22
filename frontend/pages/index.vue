<template>
  <div class="col-span-4">
    <Title />
    <AppForm />
  </div>
</template>

<script>
import Title from '@/containers/Title'
import AppForm from '@/components/AppForm'

export default {
  components: { Title, AppForm },
  layout: 'default',
}
</script>
