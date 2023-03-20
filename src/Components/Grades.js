import React from "react";
import { GradeList } from './GradeList';

export class Grades extends React.Component {
    //Run
    render() {
        //Return Grade Array by map 
        return this.props.grades.map(
            (grade) => {
                console.log(this.props.grades);
                // Assign Unique ID
                return <GradeList grade={grade} key={grade._id} ></GradeList>
            }
        );
        
        //Test
        //console.log(this.props.grades);
    }
}