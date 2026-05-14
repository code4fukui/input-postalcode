# input-postalcode

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple, dependency-free custom HTML element `<input-postalcode>` for entering 7-digit Japanese postal codes.

## Demo

Try the live demo: [https://code4fukui.github.io/input-postalcode/](https://code4fukui.github.io/input-postalcode/)

## Features

-   **7-Digit Format:** Restricts input to exactly 7 digits (0-9).
-   **Auto-Validation:** Automatically clears the input if the value is not 7 digits long when the element loses focus.
-   **Standard Attributes:** Supports standard form input attributes like `required`.
-   **Lightweight:** Implemented as a native Web Component.

## Usage

1.  **Import the component from the CDN:**

    ```html
    <script type="module" src="https://code4fukui.github.io/input-postalcode/input-postalcode.js"></script>
    ```

2.  **Add the element to your HTML:**

    ```html
    <input-postalcode id="postal-code-input"></input-postalcode>
    ```

3.  **Listen for changes and get the value in JavaScript:**

    ```html
    <script type="module">
      const postalInput = document.getElementById("postal-code-input");
      postalInput.onchange = () => {
        // The value will be a 7-digit string or an empty string.
        console.log(`Postal code changed to: ${postalInput.value}`);
      };
    </script>
    ```

## Attributes & Properties

-   `value`: Get or set the 7-digit postal code as a string.
-   `required`: A standard boolean attribute. If present, the input must be filled out to be valid in a form.

## Related Project

-   [PostalCode](https://github.com/code4fukui/PostalCode): A related library for handling Japanese postal codes.

## License

[MIT](LICENSE)