# Pages フォルダの扱い方

## components は contaners フォルダのコンポーネントを使用する

```vue
<template>
  <Hoge />
</template>

<script>
import Hoge from '@/contaners/Hoge'

export default {
  components: {
    Hoge,
  },
}
</script>
```
