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

## API

TODO

## Development

TODO

## Browser support

It does not use any tool for browser support. Using autoprefixer for browser support is up to you. I strongly recommend you consider using [normalize.css](https://necolas.github.io/normalize.css/) to avoid inconsistency.

## License

Copyright (c) 2017 Hasan Aydoğdu. See the [LICENSE](/LICENSE) file for license rights and limitations (MIT).
