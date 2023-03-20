//Imports
import React from "react";
import axios from "axios";

//Import Grade
import { Grades } from "./Grades";

export class ShowGrades extends React.Component {
    //Constructor
    constructor() {
        super();

        //Reload Binding
        this.reload = this.reload.bind(this);
    }

    //Reload
    reload() {
        this.componentDidMount();
    }

    //Connect and get data
    componentDidMount() {
        //Makes HTTP Request to get json
        axios.get('http://localhost:2000/api/grades')
            //When Request Completed
            .then((response) => {
                // Update State
                this.setState({ grades: response.data });
            }
            )
            //If Request returns error
            .catch(
                (error) => {
                    console.log(error);
                });
    }

    //Object that will hold all data for class
    state = {
        //Assign Data to Array
        grades: []
    }

    render() {
        return (
            <div className="App">
                <center>
                    <h3>Show Grades Page will be here</h3>
                    {/* Display Grade Class from Grade Component & Pass in Variable */}
                    <Grades grades={this.state.grades} reload={this.reload}></Grades>
                </center>
            </div>
        )
    }
}