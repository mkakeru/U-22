<template>
  <button
    class="h-14 text-base text-primary font-bold rounded shadow"
    :class="[customClass, { 'w-full': isFullWidth }]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    background: {
      type: String,
      default: 'white',
    },
    isFullWidth: {
      type: Boolean,
      default: true,
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
