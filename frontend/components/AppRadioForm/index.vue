<template>
  <AppForm :title="title" :caption="caption">
    <template v-for="radioItem in radioItems">
      <div :key="radioItem.id" class="mt-4">
        <AppRadio
          :id="radioItem.id"
          v-model="selectedRadio"
          :text="radioItem.text"
        />
      </div>
    </template>
  </AppForm>
</template>

<script>
import AppForm from '@/components/AppForm'
import AppRadio from '@/components/AppRadio'

export default {
  components: { AppForm, AppRadio },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    title: {
      type: String,
      default: 'title',
    },
    caption: {
      type: String,
      default: 'caption',
    },
    value: {
      type: Object,
      default: () => {},
    },
    radioItems: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    selectedRadio: {
      get() {
        return this.value
      },
      set(selectedRadio) {
        this.$emit('input', selectedRadio)
      },
    },
  },
}
</script>
