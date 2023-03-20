//Imports
import React from "react";

export class HomeStudent extends React.Component {
    render() {
        return (
            <div className="App">
                <center>
                <h1>Welcome to Student Gradee Database</h1>
                <h2 > It is {new Date().toLocaleTimeString()}</h2 >
                <ul>
                    <br></br>
                    <li>Keep track of your grades by adding them to a repository</li>
                    <br></br>
                    <li>Add your grades in the "Add Grade" section</li>
                    <br></br>
                    <li>View your added Grades in the "Repository" section</li>
                    <dl>
                        <dt>Edit</dt>
                        <dd>- Here you can edit an already existing grades</dd>
                        <dt>Delete</dt>
                        <dd>- You may also delete an already existing Grade</dd>
                    </dl>
                </ul>
                {/* <img src='https://th.bing.com/th/id/OIP._yy6Y3uwyXRnQCjCtLE_RgHaHu?pid=ImgDet&rs=1' width="400" height="360"></img> */}
                </center>
            </div>
        )
    }
}