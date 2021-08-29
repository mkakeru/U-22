<template>
  <AppButton background="button-primary" @buttonClick="toEditorPage"
    >プロフィールを編集</AppButton
  >
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppButton
  },
  methods: {
    toEditorPage() {
      this.$router.push({ name: 'hitokoe-profile-edit' })
    }
  }
}
</script>
