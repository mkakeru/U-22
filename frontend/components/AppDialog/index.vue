<template>
  <div>
    <AppDialogFlame :class="{ hidden: dialogFlag }">
      <template #dialog-head> 助けを求めますか？ </template>
      <template #dialog-text>
        近くのヘルパーと緊急連絡先へ
        <span class="block">メッセージを送信します。</span>
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
    <AppDialogFlame :class="{ hidden: !dialogFlag }">
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
      default: 'white'
    },
    buttonPrimaryColor: {
      type: String,
      default: 'button-primary'
    }
  },
  data() {
    return {
      dialogFlag: false
    }
  },
  computed: {
    customClass() {
      return {
        button: `${this.buttonColor}`,
        buttonPrimary: `${this.buttonPrimaryColor}`
      }
    }
  },
  methods: {
    postSosClick() {
      this.dialogFlag = true
      this.$emit('sosAction')
    },
    dialogClose() {
      this.dialogFlag = false
      this.$emit('dialogClose')
    }
  }
}
</script>
