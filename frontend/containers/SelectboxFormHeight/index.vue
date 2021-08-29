<template>
  <AppSelectboxForm
    :value="selectedHeight"
    title="身長"
    caption="※おおよその身長を選択してください"
    :select-items="heightListItems"
    @change="setSelectedItem"
  />
</template>

<script>
import AppSelectboxForm from '@/components/AppSelectboxForm'
import { STATE_TYPES_OF_USER } from '@/store/user'

export default {
  name: 'SelectboxFormHeight',
  components: { AppSelectboxForm },
  computed: {
    heightListItems() {
      return this.$store.getters['profileItems/heightItems']
    },
    selectedHeight() {
      return this.$store.getters['user/height']
    }
  },
  methods: {
    setSelectedItem(payload) {
      this.$store.commit('user/setSelectedItem', {
        type: STATE_TYPES_OF_USER.height,
        payload
      })
    }
  }
}
</script>
