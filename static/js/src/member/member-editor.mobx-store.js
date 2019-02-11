import autobind from 'autobind-decorator';
import { action, observable } from 'mobx';

import api from '../utils/api';

export default class NewMemberStore {
    @observable id = null;
    @observable name = '';
    @observable surname = '';
    @observable email = '';

    constructor(member = null) {
        if(member) {
            this.setMemberProp(member)
        }
    }

    @autobind
    @action
    setMemberProp(member) {
        this.id = member.id;
        this.name = member.name;
        this.surname = member.surname;
        this.email = member.email;
    }


    @autobind
    @action
    onNameChange(event) {
        this.name = event.target.value;
    }

    @autobind
    @action
    onSurnameChange(event) {
        this.surname= event.target.value;
    }

    @autobind
    @action
    onEmailChange(event) {
        this.email = event.target.value;
    }

    get apiUrl() {
        if(this.id) {
            return `/member/${this.id}/`;
        }
        return '/member/';
    }

    @autobind
    onSubmit() {
        event.preventDefault();
        const apiCall = this.id ? api.patch : api.post;
        return apiCall(this.apiUrl, {
            name: this.name,
            surname: this.surname,
            email: this.email
        });
    }
}
