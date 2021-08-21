<template>
  <div>
    <div class="w-full box-border rounded-md shadow flex h-14 text-disable">
      <button class="w-1/3" @click="profileClick">
        <div class="flex justify-center items-center">
          <div class="pr-2">
            <svg
              :class="
                activeComponent === 'TabContentsByProfile'
                  ? 'fill-primary'
                  : 'fill-disable'
              "
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M15,15a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,15,15Zm0,2.25c-3,0-9,1.507-9,4.5V24H24V21.75C24,18.757,18,17.25,15,17.25Z"
                transform="translate(-6 -6)"
              />
            </svg>
          </div>
          <p
            class="font-bold text-sm"
            :class="
              activeComponent === 'TabContentsByProfile'
                ? 'text-active'
                : 'text-disable'
            "
          >
            プロフィール
          </p>
        </div>
      </button>
      <button class="w-1/3" @click="sosClick">
        <div class="flex justify-center items-center">
          <div class="pr-2">
            <svg
              :class="
                activeComponent === 'TabContentsBySos'
                  ? 'fill-primary'
                  : 'fill-disable'
              "
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <g transform="translate(-608 -146)">
                <path
                  class="a"
                  d="M2,0h8a2,2,0,0,1,2,2V8a0,0,0,0,1,0,0H0A0,0,0,0,1,0,8V2A2,2,0,0,1,2,0Z"
                  transform="translate(611 150)"
                />
                <path
                  class="a"
                  d="M2,0H16a2,2,0,0,1,2,2V5a0,0,0,0,1,0,0H0A0,0,0,0,1,0,5V2A2,2,0,0,1,2,0Z"
                  transform="translate(608 159)"
                />
                <rect
                  class="a"
                  width="1"
                  height="2.25"
                  rx="0.5"
                  transform="translate(616.5 146)"
                />
                <rect
                  class="a"
                  width="1"
                  height="2"
                  rx="0.5"
                  transform="translate(623.067 147) rotate(30)"
                />
                <rect
                  class="a"
                  width="1"
                  height="2"
                  rx="0.5"
                  transform="translate(610.067 147) rotate(-30)"
                />
              </g>
            </svg>
          </div>
          <p
            class="font-bold text-sm"
            :class="
              activeComponent === 'TabContentsBySos'
                ? 'text-active'
                : 'text-disable'
            "
          >
            SOS
          </p>
        </div>
      </button>
      <button class="w-1/3" @click="settingClick">
        <div class="flex justify-center items-center">
          <div class="pr-2">
            <svg
              :class="
                activeComponent === 'TabContentsBySetting'
                  ? 'fill-primary'
                  : 'fill-disable'
              "
              xmlns="http://www.w3.org/2000/svg"
              width="18.091"
              height="18.599"
              viewBox="0 0 18.091 18.599"
            >
              <path
                d="M19.363,13.211a6.412,6.412,0,0,0,0-1.823l1.962-1.534a.469.469,0,0,0,.112-.6l-1.86-3.218a.467.467,0,0,0-.567-.2l-2.316.93a6.794,6.794,0,0,0-1.572-.911l-.353-2.464A.453.453,0,0,0,14.313,3h-3.72a.453.453,0,0,0-.456.391L9.785,5.855a7.144,7.144,0,0,0-1.572.911L5.9,5.836a.454.454,0,0,0-.567.2L3.47,9.258a.458.458,0,0,0,.112.6l1.962,1.534a7.375,7.375,0,0,0-.065.911,7.375,7.375,0,0,0,.065.911L3.582,14.745a.469.469,0,0,0-.112.6l1.86,3.218a.467.467,0,0,0,.567.2l2.316-.93a6.794,6.794,0,0,0,1.572.911l.353,2.464a.453.453,0,0,0,.456.391h3.72a.453.453,0,0,0,.456-.391l.353-2.464a7.144,7.144,0,0,0,1.572-.911l2.316.93a.454.454,0,0,0,.567-.2l1.86-3.218a.469.469,0,0,0-.112-.6l-1.962-1.534Zm-6.909,2.343A3.255,3.255,0,1,1,15.708,12.3,3.258,3.258,0,0,1,12.454,15.554Z"
                transform="translate(-3.406 -3)"
              />
            </svg>
          </div>
          <p
            class="font-bold text-sm"
            :class="
              activeComponent === 'TabContentsBySetting'
                ? 'text-active'
                : 'text-disable'
            "
          >
            設定
          </p>
        </div>
      </button>
    </div>
    <div>
      <component :is="activeComponent"></component>
    </div>
  </div>
</template>
<script>
import TabContentsByProfile from '@/containers/TabContentsByProfile'
import TabContentsBySos from '@/containers/TabContentsBySos'
import TabContentsBySetting from '@/containers/TabContentsBySetting'

export default {
  name: 'AppTabMenu',
  components: {
    TabContentsByProfile,
    TabContentsBySos,
    TabContentsBySetting
  },
  data() {
    return {
      activeComponent: 'TabContentsByProfile'
    }
  },
  methods: {
    profileClick() {
      this.activeComponent = 'TabContentsByProfile'
    },
    sosClick() {
      this.activeComponent = 'TabContentsBySos'
    },
    settingClick() {
      this.activeComponent = 'TabContentsBySetting'
    }
  }
}
</script>
