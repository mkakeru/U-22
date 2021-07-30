<template>
  <label class="text-sm font-bold flex items-center">
    <input
      v-model="selectedRadio"
      :value="id"
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
      type: Number,
      default: 0,
    },
    id: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      default: 'title',
    },
  },
  computed: {
    selectedRadio: {
      get() {
        return this.value
      },
      set() {
        this.$emit('input', this.id)
      },
    },
  },
}
</script>
