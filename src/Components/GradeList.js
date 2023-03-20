//Imports
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class GradeList extends React.Component {
    //Constructor
    constructor() {
        super();
        //Delete Grade Binds
        this.DeleteGrade = this.DeleteGrade.bind(this);
    }

    //Delete Grade
    DeleteGrade(e) {
        e.preventDefault();
        axios.delete('http://localhost:2000/api/grade/' + this.props.grade._id)
            .then((res) => { this.props.Reload(); })
            .catch();
    }

    //Render Page
    render() {
        return (
            <div className="GradeItem">
                <center>
                    {/* Print out info from Array as Cards */}
                    <Card style={{ width: '80%' }}>
                        {/* Displaying bootstrap Grade cards by using props */}
                        <Card.Header>
                            <Card.Title>{ this.props.grade.module}</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Card.Title>Teacher: {this.props.grade.teacher}</Card.Title>
                            <Card.Subtitle>Exam: {this.props.grade.exam}</Card.Subtitle>
                            <Card.Text>Grade: {this.props.grade.grade}</Card.Text>
                            <Card.Text>Year: {this.props.grade.year}</Card.Text>
                        </Card.Body>

                        <Card.Footer>
                            {/* Edit */}
                            <Link to={'/editGrade/:' + this.props.grade._id} className="btn btn-primary">Edit</Link>

                            {/* Deletes Grade and reloads page */}
                            <Button variant="danger" onClick={this.DeleteGrade} style={{ margin: "10px" }}>Delete</Button>
                        </Card.Footer>
                    </Card>
                </center>
            </div>
        )
    }
}