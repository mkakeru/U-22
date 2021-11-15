<template>
  <div>
    hello
    <button @click="showInfo">show</button>
  </div>
</template>

<script>
// import AWS from 'aws-sdk'
// import s3 from 'aws-sdk/clients/s3'
import { v4 as uuidv4 } from 'uuid'

export default {
  data() {
    return {
      file: null
    }
  },
  methods: {
    showInfo() {
      // eslint-disable-next-line no-console
      console.log(uuidv4())
    }
  }
}
</script>
