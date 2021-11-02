<template>
  <div>
    <AppContentCard
      button-text="助けを呼ぶ"
      content-color="primary"
      :icon="sosImg"
      @buttonClick="dialogShow"
    />
    <div class="flex">
      <span class="pt-2 text-sm font-bold text-secondary">※</span>
      <p class="pt-2 text-sm font-bold text-secondary">
        近くにいるヘルパーと緊急連絡先に<br />メッセージを送信します
      </p>
    </div>
    <div :class="{ hidden: dialogFlag }">
      <AppDialog @dialogClose="dialogClose" @sosAction="sosAction" />
    </div>
  </div>
</template>

<script>
import AppContentCard from '@/components/AppContentCard'
import AppDialog from '@/components/AppDialog'
import sosSVG from '@/assets/svg/help-button.svg'

export default {
  name: 'ContentCardBySos',
  components: {
    AppContentCard,
    AppDialog
  },
  data() {
    return {
      dialogFlag: true,
      sosImg: {
        src: sosSVG,
        alt: 'sos-image'
      }
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
       await this.$api.user.sendSMS(this.lat, this.lng)
      await this.$webSocket.client._sendToHelper(this.lat, this.lng)
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
