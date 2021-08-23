<template>
  <div>callback content</div>
</template>

<script>
export default {
  middleware: ['serverRedirect'],
  asyncData({ redirect }) {
    redirect(301, '/hitokoe')
  }
}
</script>
