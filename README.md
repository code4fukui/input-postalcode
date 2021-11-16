# input-postalcode
  
https://code4fukui.github.io/input-postalcode/

## account id is...

0-9 x7
## usage

```html
<script type="module" src="https://code4fukui.github.io/input-postalcode/input-postalcode.js"></script>
<input-postalcode id=inp></input-postalcode>

<script type="module">
onload = () => {
  inp.onchange = () => {
    console.log(inp.value);
  };
};
</script>
```
