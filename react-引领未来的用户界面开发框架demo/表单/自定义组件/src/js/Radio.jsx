import React from 'react';

export default class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : this.props.defaultValue
        }
    }

    static propTypes = {
        onChange : React.PropTypes.func
    }

    handleChange(e) {
        if(this.props.onChange){
            this.props.onChange(e);
        }

        this.setState({
            value : e.target.value
        })

    }

    render() {
        let value = this.props.value || this.state.value,
            children = [];

        React.Children.map(this.props.children,(child,i) => {
            let span =  (
                <span key={this.props.name + '_' + i}>
                    <label>
                        <input
                            type="radio"
                            name={this.props.name}
                            value={child.props.value}
                            checked={child.props.value == value}
                            onChange={(e) => {this.handleChange(e)}}
                        />
                            {child.props.children}
                        <br/>
                    </label>
                </span>
            )
            children.push(span);
        })

        return (
            <div>{children}</div>
        )
    }

}