<template>
  <AppForm :title="title" :caption="caption">
    <slot name="input"></slot>
    <div class="mt-6">
      <AppIconButton
        alt="plus-icon"
        background="button-secondary"
        :src="plusIcon"
        @buttonClick="buttonClick"
      >
        項目を増やす
      </AppIconButton>
    </div>
  </AppForm>
</template>

<script>
import AppForm from '@/components/AppForm'
import AppIconButton from '@/components/AppIconButton'
import PlusIcon from '@/assets/svg/plus-icon.svg'

export default {
  name: 'AppMultipleInputForm',
  components: {
    AppForm,

    AppIconButton
  },
  props: {
    title: {
      type: String,
      default: 'title'
    },
    caption: {
      type: String,
      default: 'caption'
    }
  },
  data() {
    return {
      plusIcon: PlusIcon
    }
  },
  methods: {
    buttonClick() {
      this.$emit('buttonClick')
    }
  }
}
</script>
