# input-postalcode

7桁の日本の郵便番号を入力するための、依存関係のないシンプルなカスタムHTML要素 `<input-postalcode>` です。

## デモ

ライブデモをお試しください: [https://code4fukui.github.io/input-postalcode/](https://code4fukui.github.io/input-postalcode/)

## 機能

- **7桁のフォーマット:** 入力を正確に7桁の数字（0-9）に制限します。
- **自動バリデーション:** 要素からフォーカスが外れた際、値が7桁でなければ自動的に入力をクリアします。
- **標準属性:** `required` などの標準的なフォーム入力属性をサポートします。
- **軽量:** ネイティブの Web Components として実装されています。

## 使い方

1. **CDNからコンポーネントをインポートする:**

    ```html
    <script type="module" src="https://code4fukui.github.io/input-postalcode/input-postalcode.js"></script>
    ```

2. **HTMLに要素を追加する:**

    ```html
    <input-postalcode id="postal-code-input"></input-postalcode>
    ```

3. **JavaScriptで変更を監視し、値を取得する:**

    ```html
    <script type="module">
      const postalInput = document.getElementById("postal-code-input");
      postalInput.onchange = () => {
        // 値は7桁の文字列または空文字列になります。
        console.log(`郵便番号が変更されました: ${postalInput.value}`);
      };
    </script>
    ```

## 属性とプロパティ

- `value`: 7桁の郵便番号を文字列として取得または設定します。
- `required`: 標準の論理属性です。指定されている場合、フォームを有効にするには入力が必須となります。

## 関連プロジェクト

- [PostalCode](https://github.com/code4fukui/PostalCode): 日本の郵便番号を扱うための関連ライブラリです。

## ライセンス

[MIT](LICENSE)
