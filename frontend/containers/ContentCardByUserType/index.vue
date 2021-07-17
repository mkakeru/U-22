<template>
  <div>
    <template v-if="userType === 'client'">
      <AppContentCard
        :button-text="clientText"
        content-color="primary"
        @buttonClick="handleClick"
      />
    </template>

    <template v-else-if="userType === 'helper'">
      <AppContentCard
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
      require: true,
    },
  },
  data() {
    return {
      clientText: '利用者として始める',
      helperText: 'ヘルパーとして始める',
    }
  },
  methods: {
    handleClick() {
      // eslint-disable-next-line no-console
      console.log('buttontest')
    },
  },
}
</script>
