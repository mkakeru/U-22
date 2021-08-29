<template>
  <div class="flex items-center">
    <div
      :class="headingStyle.imgStyle"
      class="mr-3 rounded-full bg-white shadow"
    >
      <img :src="img.src" :alt="img.alt" />
    </div>
    <h1 :class="headingStyle.textStyle" class="font-bold text-primary">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    titleType: {
      type: String,
      default: 'base',
      require: true
    },
    title: {
      type: String,
      default: ''
    },
    img: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    headingStyle() {
      const [imgStyle, textStyle] =
        this.titleType === 'big'
          ? [['w-14', 'h-14'], ['text-3xl']]
          : [['w-12', 'h-12'], ['text-2xl']]

      return {
        imgStyle,
        textStyle
      }
    }
  }
}
</script>
