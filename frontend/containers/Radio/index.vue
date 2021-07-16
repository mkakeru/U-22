<template>
  <AppRadioForm />
</template>

<script>
import AppRadioForm from '@/components/AppRadioForm'

export default {
  components: { AppRadioForm },
  data() {
    return {
      radioItems: [
        {
          text: 'その他',
          isRadio: true,
        },
        {
          text: '男性',
          isRadio: true,
        },
        {
          text: '女性',
          isRadio: true,
        },
      ]
    },
  },
}
</script>
