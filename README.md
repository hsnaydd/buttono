<p align="center">
  <br>
  <img src="https://raw.githubusercontent.com/hsnaydd/buttono/master/buttono.svg?sanitize=true" alt="Buttono logo" width="300">
</p>

<p align="center">Buttono is a <a href="https://sass-lang.com/">Sass</a> mixin based on <strong>BEM</strong> naming convention. It helps you to create nice buttons in an easy way.</p>

<br>

<p align="center">
  <a href="https://www.npmjs.com/package/buttono"><img alt="npm version" src="https://img.shields.io/npm/v/buttono.svg"></a>
  <a href="/LICENSE"><img alt="Lisence" src="https://img.shields.io/github/license/hsnaydd/buttono.svg"></a>
  <a href="https://circleci.com/gh/hsnaydd/buttono/tree/master"><img alt="Build Status" src="https://circleci.com/gh/hsnaydd/buttono/tree/master.svg?style=shield"></a>
<p>

------

## Advantages

- Most of the time you will need only one color to create a button.
- The buttons you create with buttono will look the same in all modern browsers. You won't have to worry about that.
- Yes buttono following the BEM methodology, but you can use it with all the conventions without any problem.
- No need to worry about `focus` styles for accessibility.
- Thanks to its flexible structure, you can configure it for any situation.

## Demo

TODO

## Getting Started

```sh
npm install buttono --save
```

or

```sh
yarn add buttono
```

and import Buttono as follows (note that the exact path will differ depending on your folder structure):

```scss
@import "node_modules/buttono/buttono";
```

## Usage

```scss
$buttono-font-family: Helvetica;

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

## Documentation

- [Variables](#variables)
- [Mixins](#mixins)
  - [Block](#block)
  - [Style Modifier](#style-modifier)

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
$buttono-background-color: #e0e0e0 !default;

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

// You can specify whether to include "focus styles" through this variable
// Type: boolean
$buttono-include-focus-styles: true !default;

// Default outline width on focus state
// Type: number
$buttono-outline-width-focus: 2px !default;

// Default outline style on focus state
// Type: string
$buttono-outline-style-focus: dotted !default;

// Default outline color in focus state
// `auto` value means that the mixin generates the outline color on focus itself
// Type: color | auto
$buttono-outline-color-focus: auto !default;

// Default outline offset in focus state
// Type: string
$buttono-outline-offset-focus: 1px !default;
```

### Mixins

We use these mixins to build the final CSS output of buttono component. You can overwrite the mixins CSS with the parameters described below.

> _if you want to remove any property from the mixin output, pass the argument with `null` value._

#### Block

```scss
@mixin buttono-block(

  // Transition duration for buttons.
  // Type: number
  $transition-duration: $buttono-transition-duration,

  // Transition Property for buttons
  // Type: list
  $transition-property: $buttono-transition-property,

  // Border width for buttons
  // Type: number
  $border-width: $buttono-border-width,

  // Cursor for buttons
  // Type: string
  $cursor: pointer,

  // Font family for buttons
  // Type: string
  $font-family: $buttono-font-family,

  // Font size for buttons
  // Type: number
  $font-size: $buttono-font-size,

  // Line height for buttons
  // Type: number
  $line-height: $buttono-line-height,

  // Padding inside buttons.
  // Type: number
  $padding: $buttono-padding,

  // Text align for buttons
  // Type: string
  $text-align: center,

  // Vertical align for buttons
  // Type: string
  $vertical-align: middle,

  // Display property for buttons
  // Type: string
  $display: inline-block,

  // You can specify whether to include "disabled styles" through this variable
  // Type: boolean
  $include-disabled-styles: $buttono-include-disabled-styles
) {
  // ... mixin content ...
}
```

#### Style Modifier

```scss
@mixin buttono-style-modifier(
  // Background color for button.
  // Type: color
  $background-color: $buttono-background-color,

  // Background color on hover for button.
  // `auto` value means that the mixin generates the background
  // color on hover itself
  // Type: color | auto
  $background-color-hover: $buttono-background-color-hover,

  // Font color for button.
  // `auto` value means that the mixin decides which color to apply to the button
  // if the background color lightness is
  // lower than the threshold, the mixin chooses the normal color,
  // if not chooses the alternative color.
  // Type: color | auto
  $color: auto,

  // Font color for button on hover.
  // `auto` value means that the mixin decides which color to apply to the button
  // if the background color hover lightness is
  // lower than the threshold, the mixin chooses the normal color,
  // if not chooses the alternative color.
  // Type: color | auto
  $color-hover: auto,

  // Border width for buttons.
  // Type: number
  $border-width: $buttono-border-width,

  // Border color for buttons.
  // if you want to remove this propery from mixin output, pass this argument with null value
  // if the argument value is `undefined` the mixin will set the background color to border color.
  // Type: color | undefined
  $border-color: undefined,

  // Border color for buttons on hover.
  // `undefined` value means that the mixin will set the background color to border color.
  // `auto` value means that the mixin will generate the background color for hover state
  // Type: color | undefined | auto
  $border-color-hover: undefined,

  // Border radius for buttons.
  // Type: number
  $border-radius: $buttono-border-radius,

  // Background color lightness threshold
  // if you want to overwrite the global background color lightness threshold,
  // pass this argument with the value that you want.
  // Type: number
  $background-color-lightness-threshold: $buttono-background-color-lightness-threshold,

  // Opacity for a disabled button.
  // Type: number
  $opacity-disabled: $buttono-opacity-disabled

  // You can overwrite the global include-disabled-styles variable with this argument.
  // Type: boolean
  $include-disabled-styles: $buttono-include-disabled-styles,

  // Background color for button on disabled status.
  // `undefined` value means that the background color in disabled state will be the same with the background color in normal state
  // Type: color | undefined
  $background-color-disabled: undefined,

  // Border color for button on disabled status.
  // `undefined` value means that the border color in disabled state will be the same with the background color in normal state
  // Type: color | undefined
  $border-color-disabled: undefined,

  // Font color for button on disabled status.
  // `undefined` value means that the font color in disabled state will be the same with the font color in normal state
  // Type: color | undefined
  $color-disabled: undefined,

  // You can specify whether to include "focus styles" through this variable
  // Type: boolean
  $include-focus-styles: $buttono-include-focus-styles,

  // Outline width on focus state
  // Type: number
  $outline-width-focus: $buttono-outline-width-focus,

  // Outline style on focus state
  // Type: string
  $outline-style-focus: $buttono-outline-style-focus,

  // Outline color in focus state
  // `auto` value means that the mixin generates the outline color on focus itself
  // Type: color | auto
  $outline-color-focus: $buttono-outline-color-focus,

  // Outline offset in focus state
  // Type: string
  $outline-offset-focus: $buttono-outline-offset-focus
) {
  // ... mixin content ...
}
```

## Browser support

It does not use any tool for browser support. Using autoprefixer for browser support is up to you. I strongly recommend you consider using [normalize.css](https://necolas.github.io/normalize.css/) to avoid inconsistency.

## Change log

You can follow the change log from the [Releases page](https://github.com/hsnaydd/buttono/releases).

## Thanks

Huge thanks to [Ali Kemal Akçay](https://dribbble.com/akemal) for his awesome website design and also thanks to [Erdem](https://dribbble.com/erdemkirmitci) for the beautiful logo.

## License

Copyright (c) 2018-2019  Hasan Aydoğdu. See the [LICENSE](/LICENSE) file for license rights and limitations (MIT).
