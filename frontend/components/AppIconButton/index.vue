<template>
  <AppButton
    :is-full-width="false"
    :background="background"
    @buttonClick="buttonClick"
  >
    <div class="flex box-border pl-3 pr-4">
      <img class="pr-2" :src="src" :alt="alt" />
      <span>
        <slot />
      </span>
    </div>
  </AppButton>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'AppIconButton',
  components: { AppButton },
  props: {
    src: {
      type: String,
      default: 'src',
    },
    alt: {
      type: String,
      default: 'alt',
    },
    background: {
      type: String,
      default: 'white',
    },
  },
  methods: {
    buttonClick() {
      this.$emit('buttonClick')
    },
  },
}
</script>
