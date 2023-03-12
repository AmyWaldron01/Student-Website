//Imports
import React from "react";

export class LogIn extends React.Component {
    render() {
        return (
            <div className="App">
                <center>
                    <h3>LogIn will be here</h3>
                    {/* Display Book Class from Book Component & Pass in Variable */}
                    <h2>Please LogIn Below</h2>

                    <form onSubmit={this.submitSong}>
                    {/* Title */}
                    <div className="form-group">
                        <label htmlFor="ID">Account ID: </label>
                        <input type="text"/>
                    </div>

                    {/* Album */}
                    <div className="form-group">
                        <label htmlFor="Password">Password: </label>
                        <input type="text" required />
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