<template>
  <div>
    <div class="pt-4 mb-4">
      <div class="p-2 mb-2 bg-white rounded-md font-bold text-disable text-sm">
        <div>通知を受け取るには<br />このページを開いておく必要があります</div>
      </div>
      <AppSectionText>助ける方法</AppSectionText>
    </div>
    <div class="mb-4">
      <AppForm title="ヘルプを通知を待つ" :is-required="false">
        <div class="pt-4">
          <p class="leading-6">
            助けが欲しいユーザーが<span
              class="font-bold border-b-2 border-button-secondary"
              >1km</span
            >圏内に居る場合、<br />
            登録したLINEにメッセージが届きます。
          </p>
        </div>
      </AppForm>
    </div>

    <div>
      <AppForm title="助けに向かう" :is-required="false">
        <div class="pt-4">
          <p class="leading-6">ヘルパーは届いたメッセージに記載されている</p>
          <div class="flex flex-col">
            <div class="mr-auto font-bold border-b-2 border-button-secondary">
              助けてほしいこと
            </div>
            <div class="mr-auto font-bold border-b-2 border-button-secondary">
              ユーザーの特徴
            </div>
            <div class="mr-auto font-bold border-b-2 border-button-secondary">
              位置情報
            </div>
          </div>
          <p class="leading-6">などを利用して利用者を助けることができます。</p>
        </div>
      </AppForm>
    </div>
  </div>
</template>

<script>
import AppSectionText from '@/components/AppSectionText'
import AppForm from '@/components/AppForm'

export default {
  components: {
    AppSectionText,
    AppForm
  },
  layout: 'helper',
  mounted() {
    this.$webSocket.helper.helperChannelLink()
  }
}
</script>
