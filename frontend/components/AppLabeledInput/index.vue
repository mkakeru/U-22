<template>
  <label>
    <span class="block font-bold text-disable text-sm">
      {{ inputLabel }}
    </span>
    <AppInput v-model="inputValue" :placeholder="placeholder" />
  </label>
</template>

<script>
import AppInput from '@/components/AppInput'

export default {
  name: 'AppLabeledInput',
  components: {
    AppInput,
  },
  props: {
    inputLabel: {
      type: String,
      default: 'label',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'placeholder',
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
