<template>
  <div>hitokoe</div>
</template>

<script>
export default {
  async asyncData({ $api, store }) {
    const auth = store.getters['authLine/auth']

    const { data } = await $api.user.getUserInfomation(auth.uid)
    // eslint-disable-next-line no-console
    console.log(data)
  }
}
</script>
