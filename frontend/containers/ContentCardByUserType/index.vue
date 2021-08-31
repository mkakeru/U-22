<template>
  <div>
    <template v-if="userType === 'client'">
      <AppContentCard
        :is-active-link="true"
        :icon="clientImg"
        :button-text="clientText"
        content-color="primary"
        @buttonClick="clientAction"
      />
    </template>

    <template v-else-if="userType === 'helper'">
      <AppContentCard
        :is-active-link="true"
        :icon="helperImg"
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
      clientImg: {
        src: clientSVG,
        alt: '利用者'
      },
      helperImg: {
        src: helperSVG,
        alt: 'ヘルパー'
      }
    }
  },
  methods: {
    clientAction() {
      localStorage.setItem(this.localStrageKey, false)
    },
    helperAction() {
      localStorage.setItem(this.localStrageKey, true)
    }
  }
}
</script>
