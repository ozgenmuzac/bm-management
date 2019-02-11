import autobind from 'autobind-decorator';
import { action, observable } from 'mobx';

import api from '../utils/api';

export default class MemberStore {
    @observable members = [];
    @observable page = 1;
    @observable isCreateActive = false;

    @autobind
    @action
    getMembers() {
        const url = `/member/?page=${this.page}`;
        api.get(url).then(action(response => {
            this.members = response.data.results;
        }));
    }

    @autobind
    @action
    onCreateMember() {
        console.log('On Create user');
    }

    @autobind
    @action
    onCreateChange() {
        this.isCreateActive = !this.isCreateActive;
    }

    @autobind
    @action
    onDelete(memberId) {
        return api.delete(`/member/${memberId}/`).then(() => {
            this.getMembers();
        });
    }
}
