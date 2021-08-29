<template>
  <AppMultipleInputForm
    title="日常生活で助けてほしいこと"
    caption="※助けてほしいことを入力してください"
    @buttonClick="_addListCount"
  >
    <template #input>
      <div v-for="n in _helpListLength" :key="n" class="mt-4">
        <AppInput
          placeholder="階段を上がるのがつらい"
          :value="_helpList[n - 1]"
          @input="_setInputValues($event, n - 1)"
        />
      </div>
    </template>
  </AppMultipleInputForm>
</template>

<script>
import AppMultipleInputForm from '@/components/AppMultipleInputForm'
import AppInput from '@/components/AppInput'
import { STATE_TYPES_OF_USER } from '@/store/user'

export default {
  name: 'MultipleInputFormHelpList',
  components: {
    AppMultipleInputForm,
    AppInput
  },
  computed: {
    _helpListLength() {
      return this.$store.getters['user/helpListLength']
    },
    _helpList() {
      return this.$store.getters['user/helpList']
    }
  },
  methods: {
    _addListCount() {
      this.$store.commit('user/addListCount', { type: 'helpList' })
    },
    _setInputValues(payload, index) {
      this.$store.commit('user/setInputValues', {
        type: STATE_TYPES_OF_USER.helpList,
        index,
        payload
      })
    }
  }
}
</script>
