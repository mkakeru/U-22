<template>
  <AppForm
    title="写真の追加"
    caption="※写真を1枚追加できます"
    :is-required="false"
  >
    <div class="mt-6">
      <p class="font-medium text-secondary">
        いつも身に着けているものや <br />
        介護道具の写真を追加してください
      </p>
    </div>

    <div class="mt-4">
      <AddPictureButton @selectedFile="selectedFile" />
    </div>

    <div
      class="mt-4 aspect-w-4 aspect-h-3 rounded-md"
      :class="{ 'bg-disable': !uploadedPhoto }"
    >
      <img
        v-show="uploadedPhoto"
        class="object-contain"
        :src="uploadedPhoto"
        alt=""
      />
    </div>
  </AppForm>
</template>

<script>
import AppForm from '@/components/AppForm'
import AddPictureButton from '@/components/AppPictureForm/AddPictureButton'

export default {
  name: 'AppPictureForm',
  components: {
    AppForm,
    AddPictureButton
  },
  props: {
    uploadedPhoto: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      supplementaryText: `
      いつも身に着けているものや
      介護道具の写真を追加してください
      `
    }
  },
  computed: {
    _uploadedPhoto() {
      return this.uploadedPhoto
    }
  },
  methods: {
    selectedFile(file) {
      this.$emit('selectedFile', file)
    }
  }
}
</script>
