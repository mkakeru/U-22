<template>
  <div class="w-full box-border rounded-md shadow" :class="customClass.content">
    <div class="px-4 pb-4">
      <AppButton :background="customClass.button" @buttonClick="handleClick">
        <template v-if="!isActiveLink">
          {{ buttonText }}
        </template>
        <a
          v-else-if="isActiveLink"
          class="flex items-center justify-center w-full h-full"
          :href="url"
          >{{ buttonText }}</a
        >
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
    isActiveLink: {
      type: Boolean,
      default: false
    },
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
  data() {
    return {
      url: `https://${process.env.RAILS_DOMAIN}/api/v1/auth/line`
    }
  },
  computed: {
    customClass() {
      return {
        button: `${this.buttonColor}`,
        content: `bg-${this.contentColor}`
      }
    }
    // lineLoginURL() {
    //   const url = this._getAuthentication()
    //   return url
    // }
  },
  methods: {
    handleClick() {
      this.$emit('buttonClick')
    }
  }
}
</script>
