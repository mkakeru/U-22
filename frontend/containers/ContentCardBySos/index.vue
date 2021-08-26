<template>
  <div>
    <AppContentCard
      button-text="助けを呼ぶ"
      content-color="primary"
      @buttonClick="dialogShow"
    />
    <p class="pt-2 font-bold text-secondary">※注意書きテキスト</p>
    <div :class="{ hidden: dialogFlag }">
      <AppDialog @dialogClose="dialogClose" />
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
  methods: {
    dialogShow() {
      this.dialogFlag = false
    },
    dialogClose() {
      this.dialogFlag = true
    }
  }
}
</script>
