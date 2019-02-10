import React,{ Component } from 'react';

import authRequiredComponent from './utils/auth.react-component';

@authRequiredComponent('/member-management')
export default class MemberManagement extends Component {
    render() {
        return (
            <div>Member Component</div>
        )
    }
}
