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
  data() {
    return {
      heightListItems: [
        { id: null, text: '未選択' },
        { id: 0, text: '~130cm' },
        { id: 1, text: '131cm~140cm' },
        { id: 2, text: '141cm~150cm' },
        { id: 3, text: '151cm~160cm' },
        { id: 4, text: '161cm~170cm' },
        { id: 5, text: '171cm~180cm' },
        { id: 6, text: '180cm~' }
      ]
    }
  },
  computed: {
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
