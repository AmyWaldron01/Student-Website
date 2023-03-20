//Imports
import axios from "axios";
import React from "react";

export class AddGrade extends React.Component {
    //Constructor
    constructor() {
        super();

        //Bind to Event
        this.submitGrade = this.submitGrade.bind(this);

        this.onChangeModule = this.onChangeModule.bind(this);
        this.onChangeTeacher = this.onChangeTeacher.bind(this);
        this.onChangeExam = this.onChangeExam.bind(this);
        this.onChangeGrade = this.onChangeGrade.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);

        //Set Value to blank
        this.state = {
            module: '',
            teacher: '',
            exam: '',
            grade: 0,
            year: 0
        }
    }

    //Submit
    submitGrade(e) {
        e.preventDefault();

        //Print to Console
        console.log(`Button Clicked!\nModule: ${this.state.module}\nTeacher: ${this.state.teacher}\nExam: ${this.state.exam}\nGrade: ${this.state.grade}\nYear: ${this.state.year}`);

        const grade = {
            module: this.state.module,
            teacher: this.state.teacher,
            exam: this.state.exam,
            grade: this.state.grade,
            year: this.state.year
        }

        //Generate HTTP Request 
        axios.post("http://localhost:2000/api/grades", grade)
            .then(console.log("HTTP Request Sent"))
            .catch((error) => {
                console.log(error)
            });

        //Reset to blank
        this.setState({
            module: '',
            teacher: '',
            exam: '',
            grade: 0,
            year: 0
        })
    }

    //Change Module
    onChangeModule(e) {
        this.setState({
            module: e.target.value
        })
    }

    //Change Teacher
    onChangeTeacher(e) {
        this.setState({
            teacher: e.target.value
        })
    }

    //Change Exam
    onChangeExam(e) {
        this.setState({
            exam: e.target.value
        })
    }

    //Change Grade
    onChangeGrade(e) {
        this.setState({
            grade: e.target.value
        })
    }

    //Change Year
    onChangeYear(e) {
        this.setState({
            year: e.target.value
        })
    }

    render() {
        return (
            //Print to Screen
            <div>
                {/* Print to screen */}
                <h2>Add New Grade Details Below!</h2>
                <br></br>

                {/* Form to Add Grade to Array */}
                <form onSubmit={this.submitGrade}>
                    {/* Module */}
                    <div className="form-group">
                        <label htmlFor="module" className="module">Module: </label>
                        <input id="module" type="text" value={this.state.module} onChange={this.onChangeModule} required />
                    </div>

                    {/* Teacher */}
                    <div className="form-group">
                        <label htmlFor="teacher" className="teacher">Teacher: </label>
                        <input id="teacher" type="text" value={this.state.teacher} onChange={this.onChangeTeacher} required />
                    </div>

                    {/* Exam */}
                    <div className="form-group">
                        <label htmlFor="exam" className="exam">Exam: </label>
                        <input id="exam" type="text" value={this.state.exam} onChange={this.onChangeExam} required />
                    </div>

                    {/* Grade */}
                    <div className="form-group">
                        <label htmlFor="grade" className="grade">Total Grade: </label>
                        <input id="grade" type="number" value={this.state.grade} onChange={this.onChangeGrade} required />
                    </div>

                    {/* Year */}
                    <div className="form-group">
                        <label htmlFor="year" className="year">Year: </label>
                        <input id="year" type="text" value={this.state.year} onChange={this.onChangeYear} required />
                    </div>

                    {/* Submit Button */}
                    <br></br>
                    <input className="submit" type="submit" value="Add Grade" />
                </form>
            </div>
        )
    }
}