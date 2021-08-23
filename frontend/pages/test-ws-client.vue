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
  computed: {
    _userId() {
      return this.$store.getters['user/userId']
    }
  },
  methods: {
    handleClick() {
      this.$webSocket.client.clientChannelLink()
    },
    sendToHelper() {
      this.$webSocket.client._sendToHelper(this._userId)
    },
    disconnectAction() {
      this.$webSocket.client._disconnectAction()
    }
  }
}
</script>
