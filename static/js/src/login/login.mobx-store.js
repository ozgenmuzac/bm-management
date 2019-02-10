import autobind from 'autobind-decorator'
import { action, computed, extendObservable, observable } from 'mobx';
import qs from 'qs';

import api from '../utils/api';
import isAuthenticated, { setAuthCookie } from '../utils/me';

export default class LoginStore {
    @observable username = '';
    @observable password = '';

    constructor() {
        extendObservable(this, {
            isAuthenticated: isAuthenticated(),
        });
    }

    @autobind
    @action
    onUsernameChange(event) {
        this.username = event.target.value;
    }

    @autobind
    @action
    onPasswordChange(event) {
        this.password = event.target.value;
    }

    @autobind
    @action
    onSubmit() {
        const postData = qs.stringify({
            grant_type: 'password',
            username: this.username,
            password: this.password,
        });
        api.post('/account/login/', postData, {
            auth: {
                username: 'bmointernal',
                password: 'bmointernalsecret',
            }
        }).then(action(response => {
            setAuthCookie(response.data.access_token);
            this.isAuthenticated = true;
        }));
        event.preventDefault();
    }
}
