import React,{ Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import isAuthenticated from './me';

export default function authRequiredComponent(path, redirectUrl = '/login') {
    return function wrapWithAuthentication(WrappedComponent) {
        class AuthRequiredHOC extends Component {
            render() {
                return (
                    <Route path={ path } render={ (props) =>
                        isAuthenticated() ? (
                            <WrappedComponent {...this.props} {...props} />
                        ) : (
                            <Redirect to={ redirectUrl } />
                        )
                    } />
                );
            }
        }
        return AuthRequiredHOC;
    }
}
