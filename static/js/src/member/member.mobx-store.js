import autobind from 'autobind-decorator';
import { action, observable } from 'mobx';

import api from '../utils/api';

import NewMemberStore from './member-editor.mobx-store';

export default class MemberStore {
    @observable member;
    @observable isLoading = true;
    @observable memberEditorStore;

    constructor(memberId) {
        this.getMember(memberId);
    }

    @autobind
    @action
    getMember(memberId) {
        api.get(`/member/${memberId}/`).then(action(response => {
            this.member = response.data;
            this.memberEditorStore = new NewMemberStore(this.member);
            this.isLoading = false;
        }));
    }
}
