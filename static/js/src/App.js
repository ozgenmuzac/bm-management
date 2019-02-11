import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './main.less';
import Member from './member/member.react-component';
import MemberList from './member/member-list.react-component';
import MemberStore from './member/member-list.mobx-store';
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
                        <Row styleName="header">
                            <Column>
                                <Link to="/members/">Members List</Link>
                            </Column>
                        </Row>
                        <Row styleName="body">
                            <MemberList store={ memberStore }/>
                            <Member />
                            <Route path='/login/' render={() => <Login store={ loginStore }/> } />
                        </Row>
                    </Container>
                </BrowserRouter>
            </div>
        )
    }
}
