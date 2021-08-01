<template>
  <AppForm :title="title" :caption="caption">
    <template v-for="n in _inputFormCount">
      <div :key="n" class="mt-4">
        <AppInput
          :value="inputValue[n - 1]"
          :placeholder="placeholder"
          @input="handleInput($event, n - 1)"
        />
      </div>
    </template>
    <div class="mt-6">
      <AppIconButton
        alt="plus-icon"
        background="button-secondary"
        :src="plusIcon"
        @buttonClick="buttonClick"
      >
        項目を増やす
      </AppIconButton>
    </div>
  </AppForm>
</template>

<script>
import AppForm from '@/components/AppForm'
import AppInput from '@/components/AppInput'
import AppIconButton from '@/components/AppIconButton'
import PlusIcon from '@/assets/svg/plus-icon.svg'

export default {
  name: 'AppMultipleInputForm',
  components: {
    AppForm,
    AppInput,
    AppIconButton,
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    inputFormCount: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: 'title',
    },
    caption: {
      type: String,
      default: 'caption',
    },
    placeholder: {
      type: String,
      default: 'placeholder',
    },
  },
  data() {
    return {
      plusIcon: PlusIcon,
    }
  },
  computed: {
    _inputFormCount() {
      return this.inputFormCount
    },
    inputValue() {
      return this.value
    },
  },
  methods: {
    handleInput(text, i) {
      this.$emit('input', { i, text })
    },
    buttonClick() {
      this.$emit('buttonClick')
    },
  },
}
</script>
