<template>
  <input
    v-model="inputValue"
    class="border border-gray-400 text-base text-primary font-bold p-4 rounded"
    type="input"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'placeholder'
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
