<template>
  <AppButton>
    <img :src="src" :alt="alt" />
    <slot></slot>
  </AppButton>
</template>

<script>
import AppButton from '@/components/AppButton'
export default {
  name: 'AppIconButton',
  components: { AppButton },
  props: {
    src: {
      type: String,
      default: 'src',
    },
    alt: {
      type: String,
      default: 'alt',
    },
    background: {
      type: String,
      default: 'white',
    },
  },
  computed: {
    customClass() {
      // 'bg-' + this.background
      return `bg-${this.background}`
    },
  },
  methods: {
    handleClick() {
      this.$emit('buttonClick')
    },
  },
}
</script>
