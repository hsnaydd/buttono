# Buttono

Buttono is sass mixin based on BEM naming convention. It helps you to create nice buttons in an easy way.

## Demo

TODO

## Installing

### Using npm

```sh
$ npm install buttono --save
```

### Using Yarn

```sh
$ yarn add buttono
```

## Usage

```scss
.c-button {
  @include buttono-block();

  &--primary {
    @include buttono-style-modifier();
  }

  &--secondary {
    @include buttono-style-modifier($bg: lightblue);
  }
}
```

## Configuration

### Variables

| Name                            | Type   | Description | Default Value |
| ------------------------------- | ------ | ----------- | ------------- |
| $buttono-function-factor        | Number | -20%        | Background color lightness on hover for buttons. |
| $buttono-bg-lightness-threshold | Number | 70%         | Background lightness threshold. With this variable, the mixin decides the text color of the button. if the background color lightness is greater than the threshold, the mixin chooses the alternative color.  |
| $buttono-font-family            | Font   | null        | Font family for button elements. |
| $buttono-bg-color               | Color  | #008cba     | Default background color for `buttono-style-modifier` mixin. |
| $buttono-bg-hover:              | Color  | scale-color($buttono-bg-color, $lightness: $buttono-function-factor) | Default Background color. |
| $buttono-border-color           | Color  | $buttono-bg-hover | Default border color.
| $buttono-radius                 | Number | 3px         | Default border radius. |
| $buttono-font-size              | Number | 16px        | Default font size. |
| $buttono-line-height            | Number | (24 / 16)   | Default line-height. |
| $buttono-font-color             | Color  | #fff        | Font color for buttons. |
| $buttono-font-color-alt         | Color  | #333        | Alternative font color for buttons. |
| $buttono-padding                | List   | 10px 20px   | Padding inside buttons. |
| $buttono-border-width           | Number | 0           | Border width for buttons. |
| $buttono-transition-duration    | Number | 0.4s        | Transition duration for buttons. |
| $buttono-transition-property    | List   | background-color, color, border-color | Transition property for buttons. |
| $button-opacity-disabled        | Number | 0.5         | Opacity for a disabled button. |

## Development

TODO

## Browser support

It does not use any tool for browser support. Using autoprefixer for browser support is up to you. I strongly recommend you consider using [normalize.css](https://necolas.github.io/normalize.css/) to avoid inconsistency.

## License

Copyright (c) 2017 Hasan Aydoğdu. See the [LICENSE](/LICENSE) file for license rights and limitations (MIT).
