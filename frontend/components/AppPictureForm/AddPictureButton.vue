<template>
  <AppIconButton
    :src="photoIcon"
    alt="photo-icon"
    background="button-secondary"
    @buttonClick="buttonClick"
  >
    写真を選ぶ
    <input
      ref="input"
      class="hidden"
      type="file"
      accept="image/jpeg"
      @change="selectedFile"
    />
  </AppIconButton>
</template>

<script>
import AppIconButton from '@/components/AppIconButton'
import PhotoIcon from '@/assets/svg/photo-icon.svg'

export default {
  name: 'AddPictureButton',
  components: {
    AppIconButton
  },
  data() {
    return {
      photoIcon: PhotoIcon
    }
  },
  methods: {
    buttonClick() {
      this.$refs.input.click()
    },
    selectedFile() {
      const file = this.$refs.input.files[0]
      this.$emit('selectedFile', file)
    }
  }
}
</script>
