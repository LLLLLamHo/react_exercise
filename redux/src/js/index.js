import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from ''
import todoApp from './reducers/reducers.js';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions/action.js';
import App from './components/App.js';

let store = createStore(todoApp)

// 打印初始状态
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

ReactDom.render(
    <App/>,
    document.getElementById('root')
)


// // 发起一系列 action
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
//
// // 停止监听 state 更新
// unsubscribe();


