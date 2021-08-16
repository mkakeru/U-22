<template>
  <div class="w-full box-border rounded-md shadow" :class="customClass.content">
    <div class="px-4 pb-4">
      <AppButton :background="customClass.button" @buttonClick="handleClick">
        {{ buttonText }}
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'AppContentCard',
  components: { AppButton },
  props: {
    buttonText: {
      type: String,
      default: 'ボタン'
    },
    buttonColor: {
      type: String,
      default: 'white'
    },
    contentColor: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    customClass() {
      return {
        button: `${this.buttonColor}`,
        content: `bg-${this.contentColor}`
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('buttonClick')
    }
  }
}
</script>
