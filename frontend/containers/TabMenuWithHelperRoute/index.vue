<template>
  <div>
    <div
      class="
        w-full
        box-border
        rounded-md
        shadow
        flex
        h-14
        text-disable
        bg-white
      "
    >
      <button class="w-1/2" @click="helperClick">
        <div class="flex justify-center items-center">
          <div class="pr-2">
            <svg
              :class="
                activePath === 'helper' ? 'fill-secondary' : 'fill-disable'
              "
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <defs>
                <style>
                  .a {
                    fill: none;
                  }
                </style>
              </defs>
              <g transform="translate(1631 -837)">
                <rect
                  class="a"
                  width="18"
                  height="18"
                  transform="translate(-1631 837)"
                />
                <path
                  class="b"
                  d="M4.8,0A5.294,5.294,0,0,0,.11,2.835l2.647,1.6a.875.875,0,0,1,0,1.516L0,7.538A5.295,5.295,0,1,0,4.8,0Z"
                  transform="translate(-1623.091 840.699)"
                />
                <g transform="translate(-1631 839.888)">
                  <path
                    class="b"
                    d="M268.116,50.092a.84.84,0,0,1-.509-.171,3.759,3.759,0,0,1,0-5.991.843.843,0,1,1,1.019,1.344,2.072,2.072,0,0,0,0,3.3.843.843,0,0,1-.51,1.515Z"
                    transform="translate(-262.119 -40.813)"
                  />
                  <path
                    class="b"
                    d="M253.452,43.76a.84.84,0,0,1-.329-.067,6.479,6.479,0,0,1-3.6-6.045,6.481,6.481,0,0,1,3.6-6.045.843.843,0,0,1,.66,1.552,4.788,4.788,0,0,0-2.578,4.493,4.787,4.787,0,0,0,2.578,4.493.843.843,0,0,1-.33,1.62Z"
                    transform="translate(-249.518 -31.535)"
                  />
                </g>
              </g>
            </svg>
          </div>
          <p
            class="font-bold text-sm"
            :class="
              activePath === 'helper' ? 'text-active-accent' : 'text-disable'
            "
          >
            助ける方法
          </p>
        </div>
      </button>
      <button class="w-1/2" @click="settingClick">
        <div class="flex justify-center items-center">
          <div class="pr-2">
            <svg
              :class="
                activePath === 'helper-setting'
                  ? 'fill-secondary'
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
              activePath === 'helper-setting'
                ? 'text-active-accent'
                : 'text-disable'
            "
          >
            設定
          </p>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabMenuWithHelperRoute',
  computed: {
    activePath() {
      return this.$route.name
    }
  },
  methods: {
    helperClick() {
      this.activePath = 'helper'
      this.$router.push({ name: 'helper' })
    },
    settingClick() {
      this.activePath = 'helper-setting'
      this.$router.push({ name: 'helper-setting' })
    }
  }
}
</script>
