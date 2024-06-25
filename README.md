namaste react

<!-- 2 types of exports -->
default export/import

export default <name>

import <name> from 'path'

named export/import

export const <name>
import {name} from 'path'

# types of testing (developer)
-Unit Testing - testing one unit or component in isolation -jest
-Integration Testing - testing 
-End to End Testing -e2e testing -    
 
 react testing library builds on top of DOM testing library. it acts as a wrapper for DOM testing library.

 if you are creating react app with create-react-app, react testing is already integrated in it.

 when it comes to parcel, we have to integrate react testing in to app.

 react testing library uses JEST, it is a JS framework.

# steps
npm i -D @testing-library/react
npm i -D jest 
npm install --save-dev babel-jest @babel/core @babel/preset-env ====>(babel dependencies)
configure Babel (babel.config.js)
configure parcel config file to disable default babael transpilation.
jest configuration (npx jest --init)
install jsdom library- ===>(npm install --save-dev jest-environment-jsdom)
install @babel/preset-react - to make JSX work in test cases.
include @babel/preset-react inside my babel config.
install @testing-library/jest-dom

 