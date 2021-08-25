<template>
  <div class="font-bold">
    <h2 class="pt-8 text-xl">プロフィール</h2>
    <div class="pt-4">
      <div class="w-full box-border p-4 bg-white rounded-md shadow">
        <h3 class="text-xl">名前</h3>
        <p class="pt-2 text-primary text-opacity-85">山田 太郎</p>
      </div>
    </div>
    <div class="pt-6">
      <div class="w-full box-border p-4 bg-white rounded-md shadow">
        <h3 class="text-xl">性別</h3>
        <p class="pt-2 text-primary text-opacity-85">男性</p>
      </div>
    </div>
    <div class="pt-6">
      <div class="w-full box-border p-4 bg-white rounded-md shadow">
        <h3 class="text-xl">日常で助けてほしいこと</h3>
        <ul class="pt-2 list-inside list-disc">
          <li class="text-opacity-85">階段を上がるのがつらい</li>
          <li class="pt-1 text-primary text-opacity-85">
            階段を上がるのがつらい
          </li>
          <li class="pt-1 text-primary text-opacity-85">
            階段を上がるのがつらい
          </li>
        </ul>
      </div>
    </div>
    <div class="pt-6">
      <div class="w-full box-border p-4 bg-white rounded-md shadow">
        <h3 class="text-xl">緊急連絡先</h3>
        <h4 class="pt-2 text-sm text-primary text-opacity-65">名前</h4>
        <p class="pt-1 text-primary text-opacity-85">山田 太郎</p>
        <h4 class="pt-2 text-sm text-primary text-opacity-65">電話番号</h4>
        <p class="pt-1 text-primary text-opacity-85">090-1234-5678</p>
      </div>
    </div>
    <div class="pt-8 pb-96">
      <AppButton background="button-primary" @buttonClick="buttonClick"
        >プロフィールを編集</AppButton
      >
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'TabContentsByProfile',
  components: {
    AppButton
  },
  methods: {
    buttonClick() {}
  }
}
</script>
