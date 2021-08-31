<template>
  <div>
    <div class="pt-8 mb-4">
      <AppSectionText>編集内容確認</AppSectionText>
    </div>
    <template v-for="profileData in requiredProfileData">
      <div :key="profileData.title" :class="commonStyle">
        <AppConfirmInputDetail
          :title="profileData.title"
          :form-type="profileData.formType"
          :value="callGetter(profileData.getter)"
        />
      </div>
    </template>
    <div class="md:pb-6 pb-4">
      <UpdateProfileButton />
    </div>
    <div class="md:pb-6 pb-4">
      <AppButton background="button-secondary" @buttonClick="backPage"
        >編集画面へ戻る</AppButton
      >
    </div>
  </div>
</template>

<script>
import AppSectionText from '@/components/AppSectionText'
import AppConfirmInputDetail from '@/components/AppConfirmInputDetail'
import UpdateProfileButton from '@/containers/UpdateProfileButton'
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppSectionText,
    AppConfirmInputDetail,
    UpdateProfileButton,
    AppButton
  },
  layout: 'hitokoe',
  asyncData({ store, redirect }) {
    const isComplete = store.getters['user/isComplete']
    // eslint-disable-next-line no-useless-return
    if (isComplete.bool) return
    redirect(302, '/hitokoe/profile-edit')
  },
  data() {
    return {
      requiredProfileData: [
        // {
        //   formType: 'input',
        //   title: '名前',
        //   getter: 'userName'
        // },
        {
          formType: 'input',
          title: '性別',
          getter: 'gender'
        },
        {
          formType: 'input',
          title: '年齢',
          getter: 'age'
        },
        {
          formType: 'input',
          title: '身長',
          getter: 'height'
        },
        {
          formType: 'input',
          title: '年齢',
          getter: 'age'
        },
        {
          formType: 'list',
          title: '日常生活で助けてほしいこと',
          getter: 'helpList'
        },
        {
          formType: 'emergencyList',
          title: '緊急連絡先',
          getter: 'emergencyContactList'
        },
        {
          formType: 'list',
          title: '特徴',
          getter: 'featureList'
        },
        {
          formType: 'photo',
          title: '写真',
          getter: 'featurePhoto'
        }
      ]
    }
  },
  computed: {
    // _userName() {
    //   return this.$store.getters['user/userName']
    // },
    _gender() {
      return this.$store.getters['user/selectedValue'].gender
    },
    _age() {
      return this.$store.getters['user/selectedValue'].age
    },
    _height() {
      return this.$store.getters['user/selectedValue'].height
    },
    _helpList() {
      return this.$store.getters['user/helpList']
    },
    _featureList() {
      return this.$store.getters['user/featureList']
    },
    _emergencyContactList() {
      return this.$store.getters['user/emergencyContactList']
    },
    _featurePhoto() {
      return this.$store.getters['user/featurePhoto']
    },
    commonStyle() {
      return `md:mb-6 mb-4`
    }
  },
  methods: {
    callGetter(getter) {
      return this[`_${getter}`]
    },
    backPage() {
      this.$router.back()
    }
  }
}
</script>
