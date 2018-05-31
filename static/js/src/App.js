import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import './main.less';

@observer
export default class App extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div styleName="container">
                { this.props.store.listOfRenders.map(el => (
                        <span key={ el }>{ el }</span>
                    )
                )}
            </div>
        )
    }
}
