import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

class ServiceContextProvider extends Component {
    state = {
        user: 'Gregory',
        nbr: '0'
    }

    render() {
        return (
            <Provider value={{ user: this.state.user, nbr: this.state.nbr }}>
                {this.props.children}
            </Provider>
        );
    }
}
export { ServiceContextProvider, Consumer as ServiceContextConsumer };