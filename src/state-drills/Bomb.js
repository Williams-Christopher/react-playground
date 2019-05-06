// Solutions: https://github.com/tomatau/state-drills/tree/master/src/state-drills

import React from 'react';

class Bomb extends React.Component {

    state = {
        count: 0,
    }

    componentDidMount() {
        this.ticker = setInterval(() => {
            let newCount = this.state.count + 1;
            this.setState({count: newCount}); 
        }, 1000);
    }

    componentWillUnmount() {
        this.resetTicker();
    }

    resetTicker() {
        clearInterval(this.ticker);
    }

    render() {
        this.status = '';

        if(this.state.count >= 8) {
            this.status = 'BOOM!!!';
        }
        else if (this.state.count % 2 === 0) {
            this.status = 'TICK';
        }
        else {
            this.status = 'TOCK';
        }
        
        return (
            <div>
                <p>Bomb Component</p>
                <p>{this.status}</p>
            </div>
        )
    }
}

export default Bomb;