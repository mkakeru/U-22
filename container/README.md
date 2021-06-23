# container ディレクトリの扱い方

**処理や data を components の component に流し込む**

- 命名：　 components フォルダの中にある`AppComponent`の`App`を除く名前
- import はフォルダの名前までで`index.vue`まで書かない

```vue
<template>
  <AppCompoentsName
    :hoge="hoge"
    :hogehoge="hogehoge"
    :hogege="hogege"
    @event="event"
  />
</template>

<script>
import AppComponentName from '@/components/component'

export default {
  data() {
    return {...}
  },
  methods: {...},

  ...etc
}
</script>
```
