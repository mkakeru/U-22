<template>
  <div>
    <h2 class="pt-8 font-bold text-xl">SOSボタン</h2>
    <div class="pt-4">
      <div class="w-full box-border rounded-md shadow bg-primary">
        <div class="px-4 pb-4">
          <AppButton @buttonClick="handleClick">助けをよぶ</AppButton>
        </div>
      </div>
    </div>
    <p class="pt-2 font-bold">※注意書きテキスト</p>
    <div :class="{ hidden: dialogFlag }">
      <AppDialog @dialogClose="dialogClose" />
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppDialog from '@/components/AppDialog'

export default {
  name: 'TabContentsBySos',
  components: { AppButton, AppDialog },
  data() {
    return {
      dialogFlag: true
    }
  },
  methods: {
    handleClick() {
      this.dialogFlag = false
    },
    dialogClose() {
      this.dialogFlag = true
    }
  }
}
</script>
