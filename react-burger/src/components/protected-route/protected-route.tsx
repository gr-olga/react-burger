import {Redirect, Route} from 'react-router-dom';
import {getCookie} from "../../utils/cookies-helpers";

//todo any
export function ProtectedRoute({children, ...rest}: Record<string, any>) {
    const token = getCookie('accessToken');


    return (
        <Route
            {...rest}
            render={({location}) =>
                token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}
