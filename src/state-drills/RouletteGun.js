// Solutions: https://github.com/tomatau/state-drills/tree/master/src/state-drills

import React from 'react';

export default class RouletteGun extends React.Component {
    
    static defaultProps = {
        bulletInChamber: 8,
    }

    state = {
        chamber: null,
        spinningTheChamber: false,
    }

    pullTrigger = () => {
        this.setState({spinningTheChamber: true});
        this.timeOut = setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false,
            });
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut);
    }

    render() {
        return (
            <div>
                <p>RouletteGun Component</p>
                <div><button onClick={this.pullTrigger}>Pull the trigger!</button></div>
                <p>{this.state.spinningTheChamber === true ? 'Spinning the chamber and pulling the trigger...': ''}{this.state.spinningTheChamber === false ? this.state.chamber === this.props.bulletInChamber ? 'BANG!!!!' : 'You\'re SAFE!' : ''}</p>
            </div>
        )
    }
}