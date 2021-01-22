import React from 'react';
import { ServiceContextConsumer } from './serviceContextProvider';

const Child = (props) => {
    return (
        <ServiceContextConsumer>
            {context => (
                <div>Context is {context.user} and number is {context.nbr}</div>
            )}
        </ServiceContextConsumer>
    );
}
export default Child;