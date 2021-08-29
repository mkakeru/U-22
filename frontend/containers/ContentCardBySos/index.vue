<template>
  <div>
    <AppContentCard
      button-text="助けを呼ぶ"
      content-color="primary"
      @buttonClick="dialogShow"
    />
    <p class="pt-2 font-bold text-secondary">※注意書きテキスト</p>
    <div :class="{ hidden: dialogFlag }">
      <AppDialog @dialogClose="dialogClose" @sosAction="sosAction" />
    </div>
  </div>
</template>

<script>
import AppContentCard from '@/components/AppContentCard'
import AppDialog from '@/components/AppDialog'

export default {
  name: 'ContentCardBySos',
  components: {
    AppContentCard,
    AppDialog
  },
  data() {
    return {
      dialogFlag: true
    }
  },
  computed: {
    lat() {
      return this.$store.getters['userLocation/lat']
    },

    lng() {
      return this.$store.getters['userLocation/lng']
    }
  },
  methods: {
    async sosAction() {
      await this.$api.geolocation.currentPosition()
      await this.$api.user.sendSMS()
      this.$webSocket.client._sendToHelper(this.lat, this.lng)
    },

    dialogShow() {
      this.dialogFlag = false
      this.$webSocket.client.clientChannelLink()
    },
    dialogClose() {
      this.dialogFlag = true
      this.$webSocket.client._disconnectAction()
    }
  }
}
</script>
