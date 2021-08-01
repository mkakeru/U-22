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
    AppSelectboxForm,
  },
  data() {
    return {
      ageListItems: [
        { id: 6, text: '未選択' },
        { id: 0, text: '10歳未満' },
        { id: 1, text: '10代' },
        { id: 2, text: '20代' },
        { id: 3, text: '30代' },
        { id: 4, text: '40代' },
        { id: 5, text: '50代以上' },
      ],
    }
  },
  computed: {
    selectedAge() {
      return this.$store.getters['user/age']
    },
  },
  methods: {
    setSelectedItem(payload) {
      this.$store.commit('user/setSelectedItem', {
        type: STATE_TYPES_OF_USER.age,
        payload,
      })
    },
  },
}
</script>
