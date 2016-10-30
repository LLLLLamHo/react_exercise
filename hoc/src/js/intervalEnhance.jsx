import React from 'react';

export var IntervalEnhance = ComposeComponent => class extends ComposeComponent{

    constructor(props){
        console.log(props)
        super(props);
        this.state = {
            seconds : 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this),1000);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
            seconds : this.state.seconds + 1000
        })
    }

    render() {
        return (
            <ComposeComponent {...this.props} {...this.state}/>
        )
    }

}