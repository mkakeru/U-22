<template>
  <div>helper page</div>
</template>

<script>
export default {
  layout: 'default',
  mounted() {
    this.$webSocket.helper.helperChannelLink()
  }
}
</script>
