import React from 'react';
import SideBar from '../Component/SideBar';
import Users from '../Component/UserList';

const ListUsers = () => {
    return (
        <div>
            <div>
                <SideBar />
                <Users />
            </div>
        </div>
    );
}

export default ListUsers;
