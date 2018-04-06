import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class InView extends Component {
    state = { isInView: false }

    onEnter = () => {
        this.setState({
            isInView: true
        });
    }


    render() {
        return (
            <div>
                <Waypoint onEnter={this.onEnter}></Waypoint>
                {this.props.children({ isInView: this.state.isInView })}
            </div>
        );
    }
}

export default InView;