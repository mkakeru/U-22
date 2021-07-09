# Pages フォルダの扱い方

## components は containers フォルダのコンポーネントを使用する

```vue
<template>
  <Hoge />
</template>

<script>
import Hoge from '@/containers/Hoge'

export default {
  components: {
    Hoge,
  },
}
</script>
```
