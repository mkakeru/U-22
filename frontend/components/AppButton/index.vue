<template>
  <button
    class="w-full h-14 text-base font-bold rounded shadow"
    :class="customClass"
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
