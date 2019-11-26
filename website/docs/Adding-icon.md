# Adding An Icon

Web Starter Kit uses SVG sprites for icons.

After completing SVG icon optimizations, place your icon with `.svg` extension into `src/icons` folder. Gulp will perform the necessary processes.

## Creating component file

`src/components/c-icon.scss`

```scss
//
// Icons
//
// Icons: src/icons
//
// Markup:
// <svg class="{{ html_classes('c-icon', class) }}">
//   <use xlink:href="#icon-[name]"></use>
// </svg>
//
// Styleguide Icons

.c-icon {
  display: inline-block;
  // Allows sizing by changing the icon’s font-size
  width: 1em;
  height: 1em;
  // Default path fill = value of the color property
  fill: currentColor;
  // Nice visual alignment for icons alongside text
  vertical-align: -0.15em;
}
```

> Note that `[name]` is a special placeholder that using by kss styleguide to generate icons list. Do not remove this!

## Usage

```html
<svg class="c-icon">
  <use xlink:href="#icon-arrow-down"></use>
</svg>
```
