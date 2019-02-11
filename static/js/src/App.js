import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './main.less';
import Member from './member/member.react-component';
import MemberManagement from './member/member-management.react-component';
import MemberStore from './member/member-management.mobx-store';
import Login from './login/login.react-component';
import LoginStore from './login/login.mobx-store';

@observer
export default class App extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    };

    render() {
        const loginStore = new LoginStore();
        const memberStore = new MemberStore();
        return (
            <div>
                <BrowserRouter>
                    <Container>
                        <Row>
                            <Column>
                                <Link to="/members">Member Management</Link>
                            </Column>
                            <Column>
                                <Link to="/login">Login Page</Link>
                            </Column>
                        </Row>
                        <Row>
                            <MemberManagement store={ memberStore }/>
                            <Member />
                            <Route path='/login' render={() => <Login store={ loginStore }/> } />
                        </Row>
                    </Container>
                </BrowserRouter>
            </div>
        )
    }
}
