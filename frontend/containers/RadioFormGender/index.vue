<template>
  <AppRadioForm
    :value="selectedGender"
    :title="title"
    :caption="caption"
    :radio-items="radioItems"
    @input="setSelectedItem"
  />
</template>

<script>
import AppRadioForm from '@/components/AppRadioForm'
import { STATE_TYPES_OF_USER } from '@/store/user'

export default {
  name: 'RadioFormGender',
  components: { AppRadioForm },
  data() {
    return {
      title: '性別',
      caption: '※性別を選んでください',
      radioItems: [
        {
          id: 0,
          text: 'その他',
        },
        {
          id: 1,
          text: '男性',
        },
        {
          id: 2,
          text: '女性',
        },
      ],
    }
  },
  computed: {
    selectedGender() {
      return this.$store.getters['user/gender']
    },
  },
  methods: {
    setSelectedItem(gender) {
      this.$store.commit('user/setSelectedItem', {
        type: STATE_TYPES_OF_USER.gender,
        payload: gender,
      })
    },
  },
}
</script>
