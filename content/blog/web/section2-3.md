---
title: デザイン・動きを伝える
index: 727
date: "2020"
labels: ["Web page"]
---

## あなたのデザイン、他人に伝わりますか？

あなたが今まで学んできたことを元に Web ページのデザインを完成させたとします。  
エンジニアにあなたの思い描いているページは実装できるでしょうか？  
エンジニアの立場になって考えてみましょう。

[You Tube](https://www.youtube.com/) を例に説明します。  
下の画像は You Tube のヘッダーのデザインとヘッダー周りの画面遷移図です。  
あなたが作ったとします。  
※画面遷移図のオレンジ色の点線は説明を割愛部分で省略していることを表しています。

| header                                      |
| ------------------------------------------- |
| ![youtube-header](./img/youtube-header.png) |

| logic                                     |
| ----------------------------------------- |
| ![youtube-logic](./img/youtube-logic.png) |

### asset を用意する

アセットとは簡単にいうと素材のことです。  
アイコンや YouTube のロゴなどは png や svg のデータとして扱います。  
エンジニアにどれを使っているのかわかりやすいようにアセット達を置くフレームを用意するなどしてまとめておきましょう。

また、ロゴを作ったとしましょう。それはエンジニアがそのまま使用できる状態でしょうか？  
試しにサイズを変更してみましょう。

| サイズ変更前            | サイズ変更後                          |
| ----------------------- | ------------------------------------- |
| ![logo](./img/logo.png) | ![logo-resize](./img/logo-resize.png) |

文字の部分がサイズが変わるのではなく、改行されてしまっています。  
これは親要素であるフレームのサイズを変えてもフォントサイズは変わらないからです。  
しかし、サイズが変わるたびにフォントサイズを変えるのはなかなか大変ですよね。  
その時に使用するのが`アウトライン化`という機能です。  
アウトライン化とはパスで構成されたオブジェクトに変換することです。  
文字のアウトライン化をすることで、フォントの情報が破棄され文字が図形化されます。  
一度アウトライン化したフォントは、元に戻すことができないので、フォントの情報を text styles に登録しておくなど修正・変更がしやすい状態にしておきましょう。  
アウトライン化したいものを選択し右クリックでアウトライン化できる表示が出てきます。

| アウトライン化                | アウトライン化完了後                          |
| ----------------------------- | --------------------------------------------- |
| ![outline](./img/outline.png) | ![youtube-outline](./img/youtube-outline.png) |

問題なくリサイズできました。  
ロゴなどの素材データを作った際はこのようにサイズを変えてみて表示が崩れないか必ず確認しましょう。  
また、オブジェクト名もそのままエンジニアが使用できるよう今回の場合は`logo`のような適した名前にしましょう。

### マウスアクションを伝える

ハンバーガーバー の下、メニューの項目に注目しましょう。  
あなたは、メニューの以下のパーツ`atoms/header/menu-parts`を component,Variants 機能を使って作るはずです。

| デフォルト                              | ホバー時                            | アクティブ時                          |
| --------------------------------------- | ----------------------------------- | ------------------------------------- |
| ![home-default](./img/home-default.png) | ![home-hover](./img/home-hover.png) | ![home-active](./img/home-active.png) |

するとエンジニアはこのような疑問を持ちます。

```
ホバーして色がどのように変わるのか？ 例えば、、、

・何秒かけて色が変化する？
・どのように変わる？
・ホバーしてすぐ変化が始まってもいい？
```

これらを伝える手段が Figma の[interactive components](https://help.figma.com/hc/en-us/articles/360061175334-Create-interactive-components-with-variants)という機能です。  
プロトタイピングの拡張版で現在は Beta 版なのでまだ使うことはできませんが、将来的に使えるようになるはずなので紹介します。
従来のプロトタイプはページの遷移しか使用することができず、ドキュメントにも上がっているチェックボックスの ON/OFF などは非効率でした。  
パーツの変化にも対応できるようになります。  
この機能が実装されれば実際の動きとしてエンジニアに伝えることができます。  
今の段階ではコンポーネントに`description`を書く欄が用意されているので、その機能を利用してテキストで伝えましょう。  
コンポーネントを選択している状態で右サイドバーのプロパティパネルに現れます。

![description](./img/description.png)

他にもハンバーガーバー をクリックすると、以下のメニューが表示されます。

| 通常時                                      |
| ------------------------------------------- |
| ![youtube-header](./img/youtube-header.png) |

| メニュー詳細表示                      |
| ------------------------------------- |
| ![header-menu](./img/header-menu.png) |

こちらもエンジニアはこのような疑問を持ちます。

```
どのように表示される？例えば、、、

・フェードイン？
・スライドイン？
・普通にパッと表示される？
```

[このサイト](https://play-asset.com/)のようにアニメーションのあるメニューも多いです。  
このような場合も上と同様の対応をしましょう。

### パターンを伝える

ヘッダーのデザイン表示パターンはもっと必要です。

```
・トップページと動画個別ページでデザインが違う
・登録チャンネルがない(少ない)場合のデザイン
・ログインしている時のしていない時のコンテンツの違い
・ダークモードのデザイン
```

他にももっとあるでしょう。

### 参考リンク

- [interactive components](https://help.figma.com/hc/en-us/articles/360061175334-Create-interactive-components-with-variants)
- [エンジニアが知りたいアニメーション](https://qiita.com/7968/items/812d6a21fc4dd9ae9c75)

### Study Diary を書きましょう！

地道で面倒な作業に思えるかもしれませんがこれをしないとエンジニアの確認するコストが増え、負荷がかかってしまいます。
デザインをするということは使うユーザーやサービスを実装するエンジニアを思いやることです。

#### 今回やったこと

- asset を用意する
- マウスアクション・タップアクションを伝える
- パターンを伝える

できたら次に進みましょう。