# Hephaestus for Webpack

## Description
Hephaestus is a build tool for Webpack to hopefully speed up my personal development
process for React/Webpack-Based front-end projects.


## Installation

`npm install hephaestus-webpack`

### Production Usage
#### Local devDependencies
```
- style-loader
- file-loader
- sass-loaded
- node-sass
```

#### Expected File Structure
```
root
  -public
  - src
    index.html
    - assets
    - css
      application.scss
    - js
      application.js
```

#### Initialization
```
var hephaestus = require( 'hephaestus-webpack' );
hephaestus.build( 'production' );
```
