const state = () => ({
  genderItems: [
    {
      id: 0,
      text: 'その他'
    },
    {
      id: 1,
      text: '男性'
    },
    {
      id: 2,
      text: '女性'
    }
  ],
  ageItems: [
    { id: 6, text: '未選択' },
    { id: 0, text: '10歳未満' },
    { id: 1, text: '10代' },
    { id: 2, text: '20代' },
    { id: 3, text: '30代' },
    { id: 4, text: '40代' },
    { id: 5, text: '50代以上' }
  ],
  heightItems: [
    { id: null, text: '未選択' },
    { id: 0, text: '~130cm' },
    { id: 1, text: '131cm~140cm' },
    { id: 2, text: '141cm~150cm' },
    { id: 3, text: '151cm~160cm' },
    { id: 4, text: '161cm~170cm' },
    { id: 5, text: '171cm~180cm' },
    { id: 6, text: '180cm~' }
  ]
})

const getters = {
  genderItems: state => state.genderItems,
  ageItems: state => state.ageItems,
  heightItems: state => state.heightItems
}

export default {
  state,
  getters
}
