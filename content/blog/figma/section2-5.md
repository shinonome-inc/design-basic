---
title: 操作 5
index: 525
date: "2020"
labels: ["figma", "object path", "object merge"]
importance: "30"
difficulty: "easy"
time: "20 min"
---

## オブジェクトのパスの結合・合成

複雑なオブジェクトを作成したい場合に役立つのがオブジェクトの結合・合成です。  
結合・合成の特徴や操作を覚えていきましょう。

### オブジェクトやパスを結合・合成する

結合・合成する方法は大きく分けて 4 つあります。  
結合・合成ができるのはグループ化やマスクが適応されていない、シェイプレイヤーに限られます。
[[right | この操作を行うには、下の画像のように、適応させたい複数のオブジェクトを選択します。<br/>ツールバーにの中央に四角が重なったアイコンが表示されるので、ここから適応させたい結合・合成の種類を選択します。]]
| ![boolean-oparations](./img/boolean-oparations.png)

#### Union Slection

[[right | 重なっているシェイプを合体した形状にします。<br/>色が違う場合は、前面のオブジェクトの色が適用されます。]]
| ![union-selection](./img/union-selection.png)

#### Subtract Slection

[[right | 前面のシェイプで背面のシェイプを型抜きした形状にします。<br/>Union Slection の反対の操作です。]]
| ![subtract-selection](./img/substract-selection.png)

#### Intersect Slection

[[right | 前面と背面の交差した部分の形状にします。]]
| ![intersect-selection](./img/intersect-selection.png)

#### Exclude Slection

[[right | 前面と背面の交差した部分を型抜きした形状にします。<br/>intersect Selection の反対の操作です。<br/>色が違う場合は、前面のオブジェクトの色が適用されます。]]
| ![exclude-selection](./img/exclude-selection.png)

### 結合・合成したパスを一つのパスに変換する

ショートカットキー：`Command + E`

[[right | 結合・合成したオブジェクトをレイヤーリストで確認すると、画像のように結合・合成前の情報が残っており、1 つのパスに変換はされていません。<br/>ここで 1 つのパスに変換させる操作を`Flatten Selection`と言います。<br/>Flatten Selection は、適応させたい結合・合成したオブジェクトを選択します。<br/>メニューバー中央から Flatten Selection を選択することで適応させることが出来ます。]]
| ![before-flatten](./img/before-flatten.png)

#### メリット

おそらくオブジェクトの合成・結合をして作るオブジェクトはロゴなどでしょう。  
ロゴは svg などのデータ形式に出力するわけですが、`Flatten Selection`にすることによってデータの中身が単純化されて同じ見た目でも容量を軽くすることができます。  
そのようなことまで考えられるといいですね。

### 参考

- [公式ドキュメント](https://help.figma.com/hc/en-us/articles/360039957534-Boolean-Operations)

### 個人シートに学んだことを記入しましょう！

![sheet](../../assets/sheet.png)

#### 今回やったこと

- オブジェクトのパスの結合・合成
- 結合・合成したパスのマージ

できたら次に進みましょう。
