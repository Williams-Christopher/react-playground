import React from 'react';

export default class Tabs extends React.Component {
    static defaultProps = {
        tabs: [],
    };

    state = {
        currentTabIndex: 0,
    };

    renderButtons() {
        return this.props.tabs.map((tab, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {tab.name}
            </button>
        ));
    }

    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex];
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }

    handleButtonClick(index) {
        this.setState({currentTabIndex: index});
    }

    render() {
        return (
            <div>
                {this.renderButtons()}
                {/* Only show content when the tabs array has length */}
                {!!this.props.tabs.length && this.renderContent()}
            </div>
        )
    }
}