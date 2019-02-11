import autobind from 'autobind-decorator';
import PropTypes from 'prop-types';
import React,{ Component } from 'react';
import { observer } from 'mobx-react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import authRequiredComponent from '../utils/auth.react-component';
import NewMember from './member-editor.react-component';
import NewMemberStore from './member-editor.mobx-store';

const MemberAction = ({member, onEdit, onDelete}) => {
    const onDeleteClick = () => {
        onDelete(member.id);
    };
    const onEditClick = () => {
        onEdit(member.id);
    };
    return (
        <div className="flex-row">
            <Button onClick={ onEditClick } variant="link"><FontAwesomeIcon icon={ faEdit }/></Button>
            <Button onClick={ onDeleteClick } variant="link"><FontAwesomeIcon icon={ faTrash }/></Button>
        </div>
    )
};

@authRequiredComponent('/members')
@observer
export default class MemberManagement extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.newMemberStore = new NewMemberStore();
    }

    @autobind
    onMemberCreate(){
        this.props.store.onCreateChange();
        this.props.store.getMembers();
    }

    @autobind
    onMemberEdit(memberId) {
        this.props.history.push(`/member/${memberId}/`);
    }

    render() {
        const { store } = this.props;
        return (
            <React.Fragment>
                <Modal show={ store.isCreateActive } onHide={ store.onCreateChange }>
                    <Modal.Header closeButton>
                        <Modal.Title>Create new member</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewMember store={ this.newMemberStore }
                                   onSubmitCallback={ this.onMemberCreate }
                                   onCancelCallback={ store.onCreateChange }/>
                    </Modal.Body>
                </Modal>
                <Container>
                    <Row className="flex-row-reverse">
                        <Button onClick={ store.onCreateChange }>Create new</Button>
                    </Row>
                    <Row>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {store.members.map( member => (
                                    <tr key={ member.id }>
                                        <td>{ member.id }</td>
                                        <td>{ member.name }</td>
                                        <td>{ member.surname }</td>
                                        <td>{ member.email }</td>
                                        <td><MemberAction member={ member }
                                                          onDelete={ store.onDelete }
                                                          onEdit={ this.onMemberEdit }/></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
