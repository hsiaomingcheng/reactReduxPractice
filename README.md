# react的redux練習，安裝redux-saga
[Redux與React-Redux中文教學書](https://chentsulin.github.io/redux/index.html)   
[我的medium Redux](https://medium.com/@hsiao516/%E5%9C%A8react%E4%B8%8A%E4%BD%BF%E7%94%A8redux-c6a37853c5ac)    
[我的medium Redux DevTools](https://medium.com/@hsiao516/redux-devtools-d513096e7688)
[我的medium Redux-saga安裝介紹](https://medium.com/@hsiao516/redux-saga-942740cca250)

***

[基本練習分支(觀察action、reducer、store之間的關係與運作方式)](https://github.com/hsiaomingcheng/reactReduxPractice/tree/feature/200420/add-redux/chrishsiao)   
[安裝Redux DevTools](https://github.com/hsiaomingcheng/reactReduxPractice/tree/feature/200425/add-reduxDevTools/chrishsiao)

***

## 安裝redux與react-redux
    # NPM
    npm install redux
    npm install react-redux

    # Yarn
    yarn add redux
    yarn add react-redux

## 安裝Redux-Saga
    $ npm install --save redux-saga
    or
    $ yarn add redux-saga

## Redux-Saga的注意點
在用Redux-Saga的時候會用到generator function，在網路上查找的訊息是可以使用@babel/polyfill去解決這個問題[詳情可以參考這篇](https://ithelp.ithome.com.tw/articles/10221593)。
一開始使用的時候都沒問題，過幾天再打開就噴錯了!!

    ERROR in multi @babel/polyfill ./src/index.jsx
    Module not found: Error: Can't resolve './src/index.jsx' in '/Users/hsiaomingcheng/chrisWrite/react/reactReduxPractice'
    @ multi @babel/polyfill ./src/index.jsx main[1]

    ERROR in multi (webpack)-dev-server/client?http://localhost:3000 (webpack)/hot/only-dev-server.js @babel/polyfill ./src/index.jsx
    Module not found: Error: Can't resolve './src/index.jsx' in '/Users/hsiaomingcheng/chrisWrite/react/reactReduxPractice'
    @ multi (webpack)-dev-server/client?http://localhost:3000 (webpack)/hot/only-dev-server.js @babel/polyfill ./src/index.jsx main[3]
    
又上網查找了錯誤，發現[@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)已不被推薦使用，要改用core.js跟regenerator-runtime，裝完之後就是把原本的@babel/polyfill給取代掉就可以，記得去把webpack裡entry點的@babel/polifill給拿掉。   

    // Needed for redux-saga es6 generator ie11 support
    import 'core-js/stable';
    import 'regenerator/runtime';

## 安裝core.js跟regenerator-runtime
[core.js](https://github.com/zloirock/core-js#babelpolyfill)跟[regenerator](https://github.com/facebook/regenerator)    

    # NPM
    npm install --save core-js@3.6.5
    npm install -g regenerator

    #YARN
    yarn add core-js@3.6.5
    yarn add regenerator