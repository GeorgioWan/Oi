
[ Oi ] [![Build Status](https://travis-ci.org/GeorgioWan/Oi.svg?branch=master)](https://travis-ci.org/GeorgioWan/Oi)
=====================

A WYSIWYG Editor to create slides in impress.js.

Have a BIG thought and try [**[ Oi ]**](https://georgiowan.github.io/Oi/editor/) out !

## You must first know

* What is [**impress.js**](https://github.com/impress/impress.js), and how it works.
* What is [**React**](https://facebook.github.io/react/) and [**Redux**](http://redux.js.org/).
* Familiar with [**es2015 (ES6)**](https://babeljs.io/docs/learn-es2015/).

## Current progress

### Features

* **Create** step
* **Edit** every step in slides
* **Delete** step but not the #OVERVIEW
* **Download** the slides as *HTML* with basic style 
* ~~**Export** the slides as *JSON*~~ (Now only download a *HTML* file, but you can import it directly!!)
* **Import** :tada:
* The best part is **WYSIWYG** in impress.js
* Easy **guided tours**

### Todo..

* Validation of input
* ~~**Import**~~
* **More theme** to choose (Only basic style for slides from impress.js demo currently)
* Fix **component re-render** (EditPanel)
* Improve the **UX/UI** (please help... T^T)
* Maybe **OAuth**(?)

... anything you thought please PR or give an issue, thanks!!!

## Development/Building

This project made by React with Redux, you can checkout [**Dependencies**](https://github.com/GeorgioWan/Oi#dependencies) first.

### Let's start

1. Install **NodeJS**.
2. Fork this project or clone it `git clone https://github.com/GeorgioWan/Oi.git` .
3. `cd Oi`
4. Install development dependencies `npm install` .
5. Please checkout your branch `git checkout -b YOUR-BRANCH-NAME` .
6. Start to develop `npm run dev` (it will run with **webpack-dev-server**)

### Additional

You can develop **[ Oi ]** with [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension), it can show you what **action** you dispatch and what's change in **state**.

## Start with

* [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)

## Dependencies

### React

* [React](https://github.com/facebook/react)
* [Redux](https://github.com/reactjs/redux)

### Webpack

* [Webpack](https://webpack.github.io/)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Others

* [TinyMCE](https://github.com/instructure-react/react-tinymce) - **[ Oi ]** current HTML editor.
* [react-bootstrap](http://react-bootstrap.github.io/)
* [react-joyride](https://github.com/gilbarbara/react-joyride) - Guided tours for **[ Oi ]**.
