<template>
  <div>
    <template v-if="formType === 'input'">
      <AppForm :title="title" :is-required="false">
        <p class="mt-4 font-medium text-secondary text-lg">
          {{ value }}
        </p>
      </AppForm>
    </template>

    <template v-if="formType === 'list'">
      <AppForm :title="title" :is-required="false">
        <ul class="mt-4">
          <li
            v-for="_value in value"
            :key="_value"
            class="font-medium text-secondary text-lg mt-2"
          >
            ・ {{ _value }}
          </li>
        </ul>
      </AppForm>
    </template>

    <template v-if="formType === 'emergencyList'">
      <AppForm :title="title" :is-required="false">
        <ul class="mt-4">
          <template v-for="(_value, i) in value">
            <div :key="_value.name" :class="{ 'border-t mt-4': i !== 0 }">
              <li class="font-medium text-secondary text-lg mt-4">
                <span class="block text-xs text-disable font-bold">名前</span>
                {{ _value.name }}
              </li>
              <li class="font-medium text-secondary text-lg mt-2">
                <span class="block text-xs text-disable font-bold">
                  電話番号
                </span>
                {{ _value.tel }}
              </li>
            </div>
          </template>
        </ul>
      </AppForm>
    </template>

    <template v-if="formType === 'photo'">
      <AppForm :title="title" :is-required="false">
        <div class="mt-4 aspect-w-4 aspect-h-3 rounded-md">
          <img v-show="value" class="object-contain" :src="value" alt="" />
        </div>
      </AppForm>
    </template>
  </div>
</template>

<script>
import AppForm from '@/components/AppForm'

export default {
  name: 'AppConfirmInputDetail',
  components: { AppForm },
  props: {
    title: {
      type: String,
      default: '名前'
    },
    formType: {
      type: String,
      default: 'input | list | emergencyList | photo'
    },
    value: {
      type: [String, Array, Object],
      default: () => {}
    }
  }
}
</script>
