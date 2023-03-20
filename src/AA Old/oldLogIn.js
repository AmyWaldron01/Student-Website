//Imports
import React from "react";

export class LogIn extends React.Component {
    // //Submit
    // submitSong(e) {
    //     e.preventDefault();

    //     //Print to Console
    //     console.log(`Button Clicked!\nType: ${this.state.type}\nCollegeID: ${this.state.collegeID}\nPassword: ${this.state.password}`);

    //     const users = {
    //         type: this.state.type,
    //         collegeID: this.state.cover,
    //         password: this.state.password,
    //     }

    //     //Generate HTTP Request 
    //     axios.post("http://localhost:2000/api/users", users)
    //         .then(console.log("HTTP Request Sent"))
    //         .catch((error) => {
    //             console.log(error)
    //         });

    //     //Reset to blank
    //     this.setState({
    //         type: "",
    //         collegeID: "",
    //         password: ""
    //     })
    // }

    render() {
        return (
            <div className="logIN">
                <center>
                    {/* Display Book Class from Book Component & Pass in Variable */}
                    <h2>Please LogIn Below</h2>
                    <br></br>

                    <form onSubmit={this.submitLogIn}>
                    {/* Account Type */}
                    <div className="form-group">
                        <label htmlFor="type">Account Type: </label>
                        <select id ="type" required>
                            <option value="student">Student</option>  
                            <option value="staff">Staff</option>
                        </select>
                    </div>

                    {/* College ID */}
                    <div className="form-group">
                        <label htmlFor="ID" required>College ID: </label>
                        <input type="text"/>
                    </div>                    

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="Password" required>Password: </label>
                        <input type="password" required />
                    </div>

                    {/* Submit Button */}
                    <br></br>
                    <input className="submit" type="submit" value="LogIn" />
                </form>
                </center>
            </div>
        )
    }
}