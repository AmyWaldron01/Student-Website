import React from "react";
import { UserList } from './UserList';

export class Users extends React.Component {
    //Run
    render() {
        //Return User Array by map 
        return this.props.users.map(
            (user) => {
                console.log(this.props.users);
                // Assign Unique ID
                return <UserList user={user} key={user._id} ></UserList>
            }
        );
        
        //Test
        //console.log(this.props.users);
    }
}