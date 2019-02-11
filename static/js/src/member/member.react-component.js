import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import MemberStore from './member.mobx-store';
import authRequiredComponent from '../utils/auth.react-component';
import NewMember from './member-editor.react-component';

@authRequiredComponent('/member/:id([0-9]+)')
@observer
export default class Member extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.store = new MemberStore(this.props.match.params.id);
    }

    render() {
        return (
            <Container>
                { this.store.isLoading ? (
                    <Row className="justify-content-md-center">
                        <FontAwesomeIcon icon={ faSpinner } size="3x" spin/>
                    </Row>
                ) : (
                    <NewMember store={ this.store.memberEditStore }/>
                )}
            </Container>
        );
    }
}
