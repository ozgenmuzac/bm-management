import {observer} from 'mobx-react';
import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Redirect } from 'react-router-dom';

@observer
export default class Login extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        const { store } = this.props;
        return (
            store.isAuthenticated ?
                (<Redirect to='/members/' />) :(
                <Container>
                    <Row className="justify-content-md-center">
                        <Form onSubmit={ store.onSubmit }>
                            <Form.Label>Username</Form.Label>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="Username"
                                    value={ store.username }
                                    onChange={ store.onUsernameChange }
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="Password"
                                    value={ store.password }
                                    onChange={ store.onPasswordChange }
                                />
                            </Form.Group>
                            <Button type="submit">Login</Button>
                        </Form>
                    </Row>
                </Container>
            )
        );
    }
}
