import React, { useEffect, useState } from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    const [user, setUser] = useState({});

    let localUser = JSON.parse(localStorage.getItem('saved-user'));

    useEffect(() => {
        if (localUser) {
            if (!user.account || JSON.stringify(user) !== JSON.stringify(localUser)) {
                setUser(localUser ? localUser : {});
            }
        } else {
            if (user.account) {
                setUser({});
            }
        }
    }, [localUser, user]);

    return (
        <>
            <Header user={user} />
            {React.cloneElement(children, { user })}
        </>
    );
}

export default Layout;