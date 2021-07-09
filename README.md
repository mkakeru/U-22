# U-22

mac は macOS 上で、
windows は wsl の ubuntu の中に clone してください。

## Frontend

**frontend stack**

- Nuxt.js
- tailwindcss
- axios
- Prettier
- ESLint
- Stylelint

<br>

新しくプロジェクトを始める際は GitHub 上で`frontend`のフォルダをクリックして README を確認してください。

## Backend

- Ruby on rails

<br>

---

<br>

## GitHub の使い方

> エディタは vscode を前提としています    
> コマンドは terminal 上で実行してください

1. 開発を始める前にすること
2. ブランチの作成
3. add と commit
4. push と pullrequest
5. merge されたのを確認し、 **「1. 開発を始める前にすること」** へ戻る

<br>

### 1. 開発を始める前にすること

**※自分の名字ブランチにいることを確認してから**

> vscode 状の左下に自分が今いるブランチが表示されているので    
> 違う場合は`git checkout lastName`

- `git pull origin main`

Remote repository の main ブランチの変更をローカルの今いるブランチに取り込む

> 最新の状態に更新する

<br>

- `git fetch -p`

Remote repository のブランチの状態を取得する

<br>

#### ***Thips***

- `git branch -a`

git で管理されているブランチを表示する

> `-a`：　 all というオプションでローカル、リモート両方のブランチを表示する   
> リモートブランチ： remotes/origin/~    
> ローカルブランチ： branchName

<br>

### 2. ブランチの作成（既に以下のブランチがある場合は行わなくて良い）

- `git checkout -b 自分の名字（ローマ字）`

自分の作業用ブランチを作成する

> `checkout -b` ブランチを作成し、   
> そのブランチへ移動する

<br>

### 3. add と commit

> `commit`はこまめにしてください。
> 例
>> ファイル作成し、ひな形を作成した後    
>> 1つの機能を作り終えた後   
>> htmlだけできた後   
>> ...etc   

- `git add .`

変更をステージング

> 区切りがついたときにする

<br>

- `git commit -m "作業内容"`

作業内容をローカルに保存

<br>

### 4. push して pullrepuestを作成する

`push`は作業の区切りがついたタイミングで行ってください（寝る前や、作業を一時中断する時など）   
`pullrequest`は一通り終わったときにしてください。（component が出来上がった時など）
> ※プログラムにエラーがある場合は`pullrequest`を作成しないでください。

- `git push -u origin HEAD`

commit した内容をリモートブランチへ反映する

> `-u` 初めてそのブランチへ push する時だけ付ける   
> `HEAD` 自分の今いるブランチ名に置き換わる

<br>

- GitHub へアクセスし、pullrequest を送る

`base`は反映させる`branch`、   
`compare`は反映したい`branch`

`pullrequest`を作成した後、各領域のリーダーに連絡してくれると助かります。

<br>

**例**
`base: main` <- `compare: hoge`   
の場合`main`に`hoge`の内容を反映したいというリクエストになる

> 今の所マージの作業はリーダーがしようと思います。

<br>

### 5. merge されたのを確認し、 **「1. 開発を始める前にすること」** へ戻る
