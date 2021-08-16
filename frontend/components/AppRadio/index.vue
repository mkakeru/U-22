<template>
  <label
    :class="[{ 'text-disable': isDisable }]"
    class="text-sm font-bold text-secondary flex items-center"
  >
    <input
      v-model="selectedRadio"
      :value="{ id: id, text: text }"
      class="w-6 h-6 mr-2"
      type="radio"
    />
    {{ text }}
  </label>
</template>

<script>
export default {
  name: 'AppRadio',
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    id: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: 'title'
    }
  },
  computed: {
    selectedRadio: {
      get() {
        return this.value
      },
      set() {
        this.$emit('input', { id: this.id, text: this.text })
      }
    },
    isDisable() {
      return this.value.id !== this.id
    }
  }
}
</script>
