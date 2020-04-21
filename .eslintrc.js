module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb'
    ],
    'parser': 'babel-eslint',
    'globals': { //全局變量(writable、readonly)
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': { //表示你想使用的額外的語言特性
            'jsx': true   //啟用JSX
        },
        'ecmaVersion': 2018, //指定你想要使用的ECMAScript版本
        'sourceType': 'module'  //設置為"script"(默認)或"module"
    },
    'plugins': [ //第三方插件
        'react'
    ],
    'rules': { //規則
        'no-console': 'error',
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent': [2, 4],
    }
};