<template>
  <AppSelectboxForm
    title="年齢"
    caption="※年齢を選択してください"
    :value="selectedAge"
    :select-items="ageListItems"
    @change="setSelectedItem"
  />
</template>

<script>
import AppSelectboxForm from '@/components/AppSelectboxForm'
import { STATE_TYPES_OF_USER } from '@/store/user'

export default {
  name: 'SelectboxFormAge',
  components: {
    AppSelectboxForm
  },
  computed: {
    ageListItems() {
      return this.$store.getters['profileItems/ageItems']
    },
    selectedAge() {
      return this.$store.getters['user/age']
    }
  },
  methods: {
    setSelectedItem(payload) {
      this.$store.commit('user/setSelectedItem', {
        type: STATE_TYPES_OF_USER.age,
        payload
      })
    }
  }
}
</script>
