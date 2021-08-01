<template>
  <AppIconButton
    background="button-secondary"
    alt="plus-icon"
    :src="plusIcon"
    @handle-click="addFormItem"
  >
    項目を増やす
  </AppIconButton>
</template>

<script>
import AppIconButton from '@/components/AppIconButton'
import PlusIcon from '@/assets/svg/plus-icon.svg'

export default {
  name: 'AddFormItemButton',
  components: {
    AppIconButton,
  },
  data() {
    return {
      plusIcon: PlusIcon,
    }
  },
  methods: {
    addFormItem() {},
  },
}
</script>
