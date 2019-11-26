# Web Starter Kit Changelog

## 4.4.0 (03.05.2018)

### New Stuff

* Added `footerVendorsBlock` block including vendor javascript files in to twig layout #52
* Added ability to change background color of the kss demo container #47
* Added margin auto utilities and documented #34
* Added background-color utilities and documented #73
* `yarn-error.log` added in gitignore #56
* Added ability to manage transition on global link by a scss variable #54

### Refactors

* Improved Form Controls styleguide documentation #28
* Removed incorrect things from styleguide documentation of Buttons #53
* Removed unnecesary callback function from gulp stylegulde task #59
* Updated npm packages #68
* scss de vendor-extension klasörünün kaldırılması #62
* Added `env` config in eslintrc #66
* Improved styleguide documentation for Icons #51
* Removed `font-size` property from `html` tag #58
* Project colors ve backgrounds utility lerinin uncss ignore a eklenmesi #74
* stylelint max-nesting-depth rule increased from 2 to 3 #71
* Twig `assets` function renamed as `asset` in order to ensure synchronization between backend and frontend #72

### Fixes

* Added transform to the stylegude example div element to keep fixed things inside to example container #69
* Fixed wrong variable problem in `image-retina` mixin #61
* Fixed the problem that when occurs production build related with uncss #70
* Added `u` prefix to `flex-column-reverse` utility class #63
