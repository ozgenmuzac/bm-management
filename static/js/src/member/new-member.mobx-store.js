import autobind from 'autobind-decorator';
import { action, observable } from 'mobx';

import api from '../utils/api';

export default class NewMemberStore {
    @observable name = '';
    @observable surname = '';
    @observable email = '';

    @autobind
    @action
    onNameChange(event) {
        console.log(event.target.value);
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

    @autobind
    onSubmit() {
        event.preventDefault();
        return api.post('/member/', {
            name: this.name,
            surname: this.surname,
            email: this.email
        });
    }
}
