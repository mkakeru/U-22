<template>
  <div
    class="
      z-10
      fixed
      top-0
      left-0
      w-full
      h-full
      bg-black bg-opacity-20
      flex
      items-center
      justify-center
    "
  >
    <div class="box-border rounded-md shadow bg-white p-4">
      <h3 class="font-bold text-2xl"><slot name="dialog-head" /></h3>
      <p class="font-bold pt-6">
        <slot name="dialog-text" />
      </p>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDialogFlame',
}
</script>
