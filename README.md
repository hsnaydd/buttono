# Buttono

Buttono is a sass mixin based on BEM naming convention. It helps you to create nice buttons in an easy way.

## Demo

TODO

## Installing

### Using npm

```sh
npm install buttono --save
```

### Using Yarn

```sh
yarn add buttono
```

## Usage

```scss
$buttono-font-family: Roboto;

.c-button {
  @include buttono-block();

  &--primary {
    @include buttono-style-modifier();
  }

  &--secondary {
    @include buttono-style-modifier($background-color: lightblue);
  }
}
```

<details>
  <summary>Output</summary>

```css
.c-button {
  border: 0 solid transparent;
  cursor: pointer;
  display: inline-block;
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.5;
  padding: 10px 20px;
  text-align: center;
  transition-duration: 0.4s;
  user-select: none;
  transition-property: background-color, color, border-color;
  vertical-align: middle;
}

.c-button:hover,
.c-button:focus {
  text-decoration: none;
}

.c-button:disabled,
.c-button[aria-disabled='true'] {
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.7;
}

.c-button--primary {
  background-color: #008cba;
  border-color: #008cba;
  border-radius: 3px;
  color: #fff;
}

.c-button--primary:hover,
.c-button--primary:focus {
  background-color: #007095;
  border-color: #007095;
  color: #fff;
}

.c-button--primary:disabled,
.c-button--primary[aria-disabled='true'] {
  background-color: #008cba;
  border-color: #008cba;
  color: #fff;
}

.c-button--secondary {
  background-color: lightblue;
  border-color: lightblue;
  border-radius: 3px;
  color: #333;
}

.c-button--secondary:hover,
.c-button--secondary:focus {
  background-color: #6fbbd3;
  border-color: #6fbbd3;
  color: #fff;
}

.c-button--secondary:disabled,
.c-button--secondary[aria-disabled='true'] {
  background-color: lightblue;
  border-color: lightblue;
  color: #333;
}

```

</details>

## Configuration

### Variables

```scss

// Background color lightness on hover for buttons.
// Type: number
$buttono-function-factor: -20% !default;

// Background lightness threshold. With this variable, the mixin decides
// the text color of the button. if the background color lightness is
// greater than the threshold, the mixin chooses the alternative color.
// Type: number
$buttono-background-color-lightness-threshold: 70% !default;

// Font family for button elements.
// Type: string
$buttono-font-family: null !default;

// Default background color for `buttono-style-modifier` mixin.
// Type: color
$buttono-background-color: #008cba !default;

// Default Background color on hover.
// `auto` value means that the mixin generates the background
// color on hover itself
// Type: color | auto
$buttono-background-color-hover: auto !default;

// Default border radius.
// Type: number
$buttono-border-radius: 3px !default;

// Default font size.
// Type: number
$buttono-font-size: 16px !default;

// Default line-height.
// Type: number
$buttono-line-height: (24 / 16) !default;

// Font color for buttons.
// Type: color
$buttono-color: #fff !default;

// Alternative font color for buttons.
// Type: color
$buttono-color-alt: #333 !default;

// Padding inside buttons.
// Type: list
$buttono-padding: 10px 20px !default;

// Border width for buttons.
// Type: number
$buttono-border-width: 0 !default;

// Transition duration for buttons.
// Type: number
$buttono-transition-duration: 0.4s !default;

// Transition property for buttons.
// Type: list
$buttono-transition-property: background-color, color, border-color !default;

// You can specify whether to include "disabled styles" through this variable
// Type: boolean
$buttono-include-disabled-styles: true !default;

// Opacity for a disabled button.
// Type: number
$buttono-opacity-disabled: 0.5 !default;
```

### Mixins

We use these mixins to build the final CSS output of buttono component. You can overwrite the mixins CSS with the parameters described below.

#### Block

```scss
@mixin buttono-block(

  // Transition duration for buttons.
  // Type: Number
  $transition-duration: $buttono-transition-duration,

  // Transition Property for buttons
  // Type: List
  $transition-property: $buttono-transition-property,

  // Border width for buttons
  // Type: Number
  $border-width: $buttono-border-width,

  // Font family for buttons
  // Type: Font
  $font-family: $buttono-font-family,

  // Font size for buttons
  // Type: Number
  $font-size: $buttono-font-size,

  // Line height for buttons
  // Type: Number
  $line-height: $buttono-line-height,

  // Padding inside buttons.
  // Type: Number
  $padding: $buttono-padding,

  // Display property for buttons
  // Type: List
  $display: inline-block,

  // Opacity for a disabled button.
  // Type: Number
  $opacity-disabled: $buttono-opacity-disabled
) {
  // ... mixin content ...
}
```

## Development

TODO

## Browser support

It does not use any tool for browser support. Using autoprefixer for browser support is up to you. I strongly recommend you consider using [normalize.css](https://necolas.github.io/normalize.css/) to avoid inconsistency.

## License

Copyright (c) 2017 Hasan Aydoğdu. See the [LICENSE](/LICENSE) file for license rights and limitations (MIT).
