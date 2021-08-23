<template>
  <div class="col-span-4">
    <div class="pt-12 pb-8">
      <AppButton @buttonClick="currentPos">GET CURRENT POSITION</AppButton>
    </div>
    <div class="pt-6">緯度: {{ _lat }}/経度: {{ _lng }}</div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppButton
  },
  data() {
    return {
      lat: '',
      lng: ''
    }
  },
  computed: {
    _lat() {
      return this.$store.getters['userPosition/lat']
    },
    _lng() {
      return this.$store.getters['userPosition/lng']
    }
  },
  methods: {
    currentPos() {
      this.$api.geolocation.currentPosition()
    }
  }
}
</script>
