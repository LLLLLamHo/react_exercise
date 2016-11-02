import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class List extends React.Component {

    constructor() {
        super();
        this.state = {
            allList: ['苹果', '西瓜', '橘子'],
        }
    }

    add() {
        let name = window.prompt('输入水果名称');
        if (name == '') {
            return;
        }
        let newList = this.state.allList.concat(name);
        this.setState({
            allList: newList
        })
    }

    remove(e,text) {
        let index = this.state.allList.indexOf(text);
        let newList = this.state.allList;
        newList.splice(index,1);
        this.setState({
            allList : newList
        })
    }

    render() {
        let items = this.state.allList.map((text, i) => {
            return (
                <div key={i}>
                    <input type="checkbox" name={i}/>
                    <label htmlFor={i}>{text}</label>
                    <button onClick={(e) => {this.remove(e,text)}}>删除</button>
                </div>
            )
        })


        return (
            <div>
                <button onClick={() => {
                    this.add()
                }} type="button">add Item
                </button>
                <ReactCSSTransitionGroup
                    transitionName='item'
                    transitionAppear={true}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    transitionAppearTimeout={500}
                >
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        )
    }

}