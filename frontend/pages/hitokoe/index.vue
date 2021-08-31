<template>
  <div>
    <div class="pt-8 mb-4">
      <AppSectionText>プロフィール</AppSectionText>
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
      <ProfileEditButton />
    </div>
  </div>
</template>

<script>
import AppSectionText from '@/components/AppSectionText'
import AppConfirmInputDetail from '@/components/AppConfirmInputDetail'
import ProfileEditButton from '@/containers/ProfileEditButton'

export default {
  components: {
    AppSectionText,
    AppConfirmInputDetail,
    ProfileEditButton
  },
  layout: 'hitokoe',
  middleware: 'userInfomation',
  data() {
    return {
      requiredProfileData: [
        {
          formType: 'input',
          title: '名前',
          getter: 'userName'
        },
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
    _userName() {
      return this.$store.getters['user/userName']
    },
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
    }
  }
}
</script>
