# Hephaestus

## Description
Hephaestus is a build tool for Webpack to hopefully speed up my personal development
process for React/Webpack-Based front-end projects.


## Installation

`npm install hephaestus-webpack`

### Production Usage
#### Expected File Structure
```
root
  -public
  - src
    index.html
    - assets
    - css
    - js
```
#### Initialize in server.js
```
var hephaestus = require( 'hephaestus-webpack' );
hephaestus.build( 'production' );
```
