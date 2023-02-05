---
title: プロトタイピング
index: 570
date: "2020"
labels: ["figma", "prototype"]
importance: "40"
difficulty: "normal"
time: "30 min"
---

## プロトタイピング

プロトタイピング機能を使うことで、リンクや画面の遷移をつけたプロトタイプを作ることができます。

### プロトタイプとは

プロトタイプは制作した UI に近い形でデザインを確認することができる機能です。  
実装前に問題点を洗い出したり、概念をテストすることによって作業の後戻りをある程度防ぐことができます。

### プロトタイプモードに切り替える

[[right | プロトタイプを作るには右サイドバーのプロパティパネル上部からモードを切り替えます。<br/>上から順に見ていきましょう。]]
| ![prototype](./img/prototype.png)

### Interactions

[[right | `Interactions`の+ボタンを押すと、以下のようなものが現れます。<br/>`Tap -> None`と書いてある部分をクリックすると詳細設定ウィンドウが現れます。<br/>詳細ウィンドウで設定することは以下です。]]
| ![prototype-details](./img/prototype-details.png)

```
・trigger: クリック・ホバーなどどんなアクションをきっかけにページが変わるか
・actions: どのようにページが変わるのかなど
・遷移先
```

スマホは`tap`,PC は`click`がトリガーであることに注意が必要です。

| trigger                                                 | actions                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- |
| ![interactions-trigger](./img/interactions-trigger.png) | ![interactions-actions](./img/interactions-actions.png) |

### Overflow behavior

[[right | 英語の通り、デバイスからはみだしている場合、どのような挙動をするか設定できます。]]
| ![overflow-behavior](./img/overflow-behavior.png)

### Show prototype settings

[[right | プレビューするデバイス、プレビューの背景、最初のフレームを設定できます。]]
| ![prototype-settings](./img/prototype-settings.png)

### Figma Mirror

実機で確認したい場合、`Figma Mirror`というスマホアプリを使うことで Wi-fi 経由でプレビューを見ることができます。  
[https://www.figma.com/mirror](https://www.figma.com/mirror) にアクセスすることで別タブでプレビューを見ることもできます。

### 使用イメージ

各自どのような動きが表現できるか見てみてください。  
[UI trace](https://www.figma.com/file/7buIRsaS1jXgZYCbjcVMgt/UITrace?node-id=0%3A1)

### 参考

- [公式ドキュメント ~アニメーションの緩急~](https://help.figma.com/hc/en-us/articles/360051748654-Prototype-easing-curves)
- [公式ドキュメント ~animation~](https://help.figma.com/hc/en-us/articles/360040315773-Prototype-interactions-and-animations)
- [公式ドキュメント ~overflow behavior~](https://help.figma.com/hc/en-us/articles/360039818734-Prototype-scrolling-with-overflow-behavior)
- [[日本語訳] Interactive Components](https://www.figma.com/community/file/1035069535593573222)

### 個人シートに学んだことを記入しましょう！

![sheet](../../assets/sheet.png)

#### 今回やったこと

- プロトタイピング 機能

できたら次に進みましょう。
