<template>
  <div>
    <template v-if="userType === 'client'">
      <AppContentCard
        :is-active-link="true"
        :button-text="clientText"
        content-color="primary"
        @buttonClick="clientAction"
      />
    </template>

    <template v-else-if="userType === 'helper'">
      <AppContentCard
        :is-active-link="true"
        :button-text="helperText"
        content-color="secondary"
        @buttonClick="handleClick"
      />
    </template>
  </div>
</template>

<script>
import AppContentCard from '@/components/AppContentCard'

export default {
  name: 'ContentCardByUserType',
  components: { AppContentCard },
  props: {
    userType: {
      type: String,
      default: 'client',
      require: true
    }
  },
  data() {
    return {
      clientText: '利用者として始める',
      helperText: 'ヘルパーとして始める'
    }
  },
  methods: {
    clientAction() {
      // eslint-disable-next-line no-console
      console.log('clientAction')
      // const res = this.$api.user.getAuthentication()
      // // eslint-disable-next-line no-console
      // console.log(res)
    },
    handleClick() {
      // eslint-disable-next-line no-console
      console.log('handleClick')
    }
  }
}
</script>
