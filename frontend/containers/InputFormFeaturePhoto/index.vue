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
      const formData = new FormData()
      formData.append('post[image]', file)
      const reader = new FileReader()
      reader.onload = async () => {
        await this.$store.commit('user/setFeaturePhoto', {
          encodedData: reader.result,
          carrierWave: formData
        })
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>
