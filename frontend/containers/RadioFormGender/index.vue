<template>
  <AppRadioForm
    v-model="selectedRadio"
    :title="title"
    :caption="caption"
    :radio-items="radioItems"
  />
</template>

<script>
import AppRadioForm from '@/components/AppRadioForm'

export default {
  components: { AppRadioForm },
  data() {
    return {
      title: '性別',
      caption: '※性別を選んでください',
      selectedRadio: 0,
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
}
</script>
