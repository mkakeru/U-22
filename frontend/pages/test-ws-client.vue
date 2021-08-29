<template>
  <div class="col-span-4">
    <div class="pt-10">
      <AppSectionText>
        this page is websocket tests for client user
      </AppSectionText>
    </div>
    <div class="pt-10">
      <AppButton background="button-primary" @buttonClick="handleClick">
        CONNECT WEBSOCKET
      </AppButton>
    </div>
    <div class="pt-6">
      <AppButton background="button-primary" @buttonClick="sendToHelper">
        SEND DATA
      </AppButton>
    </div>
    <div class="pt-6">
      <AppButton background="button-secondary" @buttonClick="disconnectAction">
        DISCONNECT WEBSOCKET
      </AppButton>
    </div>

    <div class="pt-12 pb-8">
      <AppButton @buttonClick="currentPos">GET CURRENT POSITION</AppButton>
    </div>
    <div class="pt-6">緯度: {{ _lat }}/経度: {{ _lng }}</div>
  </div>
</template>

<script>
import AppSectionText from '@/components/AppSectionText'
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppSectionText,
    AppButton
  },
  layout: 'default',
  data() {
    return {
      lat: '',
      lng: ''
    }
  },
  computed: {
    _lat() {
      return this.$store.getters['userLocation/lat']
    },
    _lng() {
      return this.$store.getters['userLocation/lng']
    },
    _userId() {
      return this.$store.getters['user/userId']
    }
  },
  methods: {
    currentPos() {
      this.$api.geolocation.currentPosition()
    },
    handleClick() {
      this.$webSocket.client.clientChannelLink()
    },
    sendToHelper() {
      this.$webSocket.client._sendToHelper(this._lat, this._lng)
    },
    disconnectAction() {
      this.$webSocket.client._disconnectAction()
    }
  }
}
</script>
