import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    
    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    updateCount = () => {
        console.log('hello')
        this.setState(state => {
            return {count: state.count + 1}
        })
    }

    render() {
       return <button color={this.props.color} onClick={this.updateCount}> Count: {this.state.count} </button>
    }
}

export default Header;