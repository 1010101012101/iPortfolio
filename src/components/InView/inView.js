import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class InView extends Component {
    state = { isInView: false }

    onEnter = () => {
        this.setState({
            isInView: true
        });

    }

    onLeave = () => {
        this.setState({
            isInView: false
        });

    }


    render() {
        return (
            <div>
                <Waypoint onEnter={this.onEnter} onLeave={this.onLeave}></Waypoint>
                {this.props.children({ isInView: this.state.isInView })}
            </div>
        );
    }
}

export default InView;