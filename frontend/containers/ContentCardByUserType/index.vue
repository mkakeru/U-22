<template>
  <div>
    <template v-if="userType === 'client'">
      <AppContentCard
        :is-active-link="true"
        :icon="clientSVG"
        :button-text="clientText"
        content-color="primary"
        @buttonClick="clientAction"
      />
    </template>

    <template v-else-if="userType === 'helper'">
      <AppContentCard
        :is-active-link="true"
        :icon="helperSVG"
        :button-text="helperText"
        content-color="secondary"
        @buttonClick="helperAction"
      />
    </template>
  </div>
</template>

<script>
import AppContentCard from '@/components/AppContentCard'
import clientSVG from '@/assets/svg/user.svg'
import helperSVG from '@/assets/svg/helper.svg'

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
      helperText: 'ヘルパーとして始める',
      localStrageKey: 'is_helper',
      clientSVG,
      helperSVG
    }
  },
  methods: {
    clientAction() {
      // const isHelper = localStorage.getItem(this.localStrageKey)
      // if (isHelper === null) localStorage.setItem(this.localStrageKey, false)
      localStorage.setItem(this.localStrageKey, false)
    },
    helperAction() {
      // const isHelper = localStorage.getItem(this.localStrageKey)
      // if (isHelper === null) localStorage.setItem(this.localStrageKey, true)
      localStorage.setItem(this.localStrageKey, true)
    }
  }
}
</script>
