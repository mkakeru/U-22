<template>
  <div>
    hello
    <button @click="showInfo">show</button>
    <InputFormFeaturePhoto />
  </div>
</template>

<script>
// import AWS from 'aws-sdk'
// import s3 from 'aws-sdk/clients/s3'
import InputFormFeaturePhoto from '@/containers/InputFormFeaturePhoto'

export default {
  components: {
    InputFormFeaturePhoto
  },
  data() {
    return {
      file: null
    }
  },
  methods: {
    showInfo() {
      // eslint-disable-next-line no-console
      const handleS3 = this.$handleS3()
      handleS3.fileUpload()
    }
  }
}
</script>
