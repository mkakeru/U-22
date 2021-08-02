<template>
  <div>
    <AppDialogFlame :class="{ hidden: isActive }">
      <template #dialog-head> 助けを求めますか？ </template>
      <template #dialog-text>
        周りのヘルパーと緊急連絡先にメッセージを送ります。
      </template>
      <div class="flex justify-end pt-12">
        <div class="pr-4">
          <AppButton
            class="shadow-none text-disable"
            :is-full-width="false"
            :background="customClass.button"
            @buttonClick="dialogClose"
          >
            やめる
          </AppButton>
        </div>
        <div>
          <AppButton
            class="shadow-none"
            :is-full-width="false"
            :background="customClass.buttonPrimary"
            @buttonClick="postSosClick"
          >
            SOS
          </AppButton>
        </div>
      </div>
    </AppDialogFlame>
    <AppDialogFlame :class="{ hidden: !isActive }">
      <template #dialog-head> SOSを送信しました！ </template>
      <template #dialog-text> text text text </template>
      <div class="pt-12">
        <AppButton
          class="shadow-none"
          :background="customClass.buttonPrimary"
          @buttonClick="dialogClose"
        >
          閉じる
        </AppButton>
      </div>
    </AppDialogFlame>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppDialogFlame from '@/components/AppDialogFlame'

export default {
  name: 'AppDialog',
  components: { AppButton, AppDialogFlame },
  props: {
    buttonColor: {
      type: String,
      default: 'white',
    },
    buttonPrimaryColor: {
      type: String,
      default: 'button-primary',
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    customClass() {
      return {
        button: `${this.buttonColor}`,
        buttonPrimary: `${this.buttonPrimaryColor}`,
      }
    },
  },
  methods: {
    postSosClick() {
      this.isActive = !this.isActive
    },
    dialogClose() {
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    },
  },
}
</script>
