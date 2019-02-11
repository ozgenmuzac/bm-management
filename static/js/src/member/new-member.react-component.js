import autobind from 'autobind-decorator';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './new-member.less'

@observer
export default class NewMember extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        onSubmitCallback: PropTypes.func,
        onCancelCallback: PropTypes.func,
    };

    @autobind
    onSubmit() {
        this.props.store.onSubmit().then(() => {
            this.props.onSubmitCallback();
        })
    }

    render() {
        const { store, onCancelCallback } = this.props;
        return (
            <Form onSubmit={ this.onSubmit }>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="Name"
                        value={ store.name }
                        onChange={ store.onNameChange }
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                        type="text"
                        name="Surname"
                        value={ store.surname }
                        onChange={ store.onSurnameChange }
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="Email"
                        value={ store.email}
                        onChange={ store.onEmailChange }
                    />
                </Form.Group>
                <Form.Row className="justify-content-end">
                    <Button onClick={ onCancelCallback } variant="outline-secondary">Cancel</Button>
                    <Button type="submit" styleName="createButton">Create</Button>
                </Form.Row>
            </Form>
        )
    }
}
