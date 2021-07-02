# components ディレクトリの扱い方

## コンポーネントの作成

**components のファイルで扱う範囲**

- 主に見た目の部分だけを扱う
- 変動する値は`container`の Components から`props`として受け取る
- `@click`などのイベントも`container`の Components から受け取り`$emit`で発火（実行）する

> サイトの見た目だけを作るイメージ
> ループ処理や api からの受け取りの処理はここでは書かない

**書き方**

- フォルダ名の先頭に`App`という接頭辞を付ける。
- components の名前は 1 単語めから大文字にしてください（アッパーキャメルケース）
  - 例： `AppTestHoge`
- 変数名は 2 単語めから先頭のスペルだけ大文字にしてください（キャメルケース）
  - 例： `appTestHoge`
- 作成したフォルダの中に`index.vue`を作成

```
--- components
  |---hoge
  |  |---index.vue
  |
  |---hogehoge
  |  |---index.vue
  |
  |---hogege
  |  |---index.vue
```

- `neme`プロパティにフォルダ名を付ける

```js
<script>
export default {
  name: 'AppDirectoryName'
}
</script>
```
