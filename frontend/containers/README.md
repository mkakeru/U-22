# containers ディレクトリの扱い方

**処理や data を components の component に流し込む**

- 命名：　 components フォルダの中にある`AppComponent`の`App`を除く名前
- import はフォルダの名前までで`index.vue`まで書かない
- containersのcomponentに関してはcomponents,containers両方のcomponentを使用してもよい。

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
import AppComponentName from '@/components/AppComponentName'
import ComponentName from '@/containers/Compoent'

export default {
  name: 'ContainerComponet',
  components: { AppComponentName, ComponentName }
  data() {
    return {...}
  },
  methods: {...},

  ...etc
}
</script>
```
