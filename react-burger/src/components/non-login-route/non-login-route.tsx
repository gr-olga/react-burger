import {Redirect, Route} from 'react-router-dom';
import {getCookie} from "../../utils/cookies-helpers";

//todo any
export function NonLoginRoute({children, ...rest}: Record<string, any>) {
    const token = getCookie('accessToken');

    return (
        <Route
            {...rest}
            render={({location}) =>
                token ? (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: {from: location}
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
}
