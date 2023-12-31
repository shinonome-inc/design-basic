---
title: 基本操作 4
index: 514
date: "2020"
labels: ["figma", "frame", "group"]
importance: "60"
difficulty: "normal"
time: "20 min"
---

## フレームとグループとセクション

Figmaの要素をグルーピングする機能は、Frame(フレーム)、Group(グループ)、Section(セクション)の3種類あります。場合に応じて、使い分けましょう。

### フレーム

 FrameはUI制作を行うために使われます。<br/>FrameはFillやStroke、Effectsといったデザイン上のプロパティ情報を持っており、Frame自身にこれらのプロパティ変更が適用されます。

Frameは、`Constraints`（日本語設定では「制約」）と、`Auto layout`の二つの固有のプロパティを持ちます。<br/>ConstraintsはFrameのサイズが変わった場合に、Frame内の子要素がFrameに対してどのようなレイアウトの振る舞いをするのかを指定するプロパティです。<br/>Auto Layoutは、子要素の並びや配置、間隔や余白(Padding)、を設定するレイアウト機能です。Constraints、Auto layoutの詳細は後述します。


### フレームの作成方法

ツールバーの#のようなアイコンをクリックするか、キーボードショートカット（FまたはA）を使用することで作成できます。
<br/>また、すでにキャンバス上に作成した要素をフレーム化するキーボードショートカットは、Windowsの場合（Shift+Alt+G）、Macの場合（Shift+option+G）です。
<br/>オートレイアウト化されたフレームを作成するキーボードショートカットは、（Shift+A）です。

### グループ

ただ単にグルーピングをしたい時はグループセレクションを使いましょう。  
複数のオブジェクトを１つのレイヤーとして扱うことができます。
<br/>グループ化のキーボードショートカットは、（Shift+G）です。

### セクション

Sectionは、主にキャンバスの要素整理を目的としています。

Sectionでグルーピングすると名前をつけることができるだけでなく、キャンバスの拡大縮小を行ってもSectionの名前の部分が見やすく、グループが何を意味しているのかがFrameやGroupよりも視覚的にわかりやすくなっているのも特徴です。
また、Frame内のFrameには名前が表示されませんが、Section内の子要素であるFrameにはFrameの名前が表示されるため、なんの要素であるかが一見してわかりやすくなります。

Section内にGroupやFrameを作ることはできる一方、**GroupやFrame内にSectionを作ることはできません。**

ツールバーの#のようなアイコンをクリックし、Sectionを選択する（Frameの作成方法と同じ）か、キーボードショートカット（Shift+S）を使用することでSectionを作成できます。

### 切り替える

[[right |右サイドバーから、Frame,Group,Sectionの切り替えができます。
<br/>Group, Frame, Sectionはデザインパネルから相互変換が可能ですが、「GroupやFrame内にSectionを作ることはできない」という制約により、親要素がFrameやGroupの場合には、子要素のFrameやGroupをSectionに変更することはできません。

<br/>下の画像は frame を選択している時の右サイドバーの様子です。<br/>frame と書かれているプルダウンから group に変更することができます。<br/>逆も同様です。]]
| ![frame-to-group](./img/frame-to-group.png)



### 参考

- [公式ドキュメント](https://help.figma.com/hc/en-us/articles/360039832054-Frames-and-Groups)

### 個人シートに学んだことを記入しましょう！

![sheet](../../assets/sheet.png)

#### 今回やったこと

- フレームセレクション
- グループセレクション
- フレームセレクション ⇄ グループセレクション

できたら次に進みましょう。
