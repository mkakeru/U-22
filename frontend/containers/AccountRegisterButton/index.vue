<template>
  <AppButton background="button-primary" @buttonClick="registerAction"
    >登録</AppButton
  >
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'AccountRegisterButton',
  components: {
    AppButton
  },
  methods: {
    registerAction() {
      // eslint-disable-next-line no-console
      console.log('register')
      // this.$router.this.$router.push()
    }
  }
}
</script>
