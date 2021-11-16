<template>
  <AppPictureForm
    :uploaded-photo="_uploadedPhoto"
    @selectedFile="_selectedFile"
  />
</template>

<script>
import AppPictureForm from '@/components/AppPictureForm'

export default {
  name: 'InputFormFeaturePhoto',
  components: { AppPictureForm },
  computed: {
    _uploadedPhoto() {
      return this.$store.getters['user/featurePhoto']
    }
  },
  methods: {
    _selectedFile(file) {
      const reader = new FileReader()
      reader.onload = async () => {
        // 実行できてない？
        await this.$store.commit('user/setFeature', {
          encodedData: reader.result,
          featureFile: file
        })
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>
