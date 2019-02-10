import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './main.less';
import MemberManagement from './member-management.react-component';
import Login from './login/login.react-component';
import LoginStore from './login/login.mobx-store';

@observer
export default class App extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    };

    render() {
        const loginStore = new LoginStore();
        return (
            <div>
                <BrowserRouter>
                    <Container>
                        <Row>
                            <Column>
                                <Link to="/member-management">Member Management</Link>
                            </Column>
                            <Column>
                                <Link to="/login">Login Page</Link>
                            </Column>
                        </Row>
                        <Row>
                            <MemberManagement />
                            <Route path='/login' render={() => <Login store={ loginStore }/> } />
                        </Row>
                    </Container>
                </BrowserRouter>
            </div>
        )
    }
}
