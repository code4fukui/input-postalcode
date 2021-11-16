# input-postalcode
  
https://code4fukui.github.io/input-postalcode/

## postalcode id is...

0-9の7桁

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

## related project

[PoscalCode](https://github.com/code4fukui/PostalCode)

