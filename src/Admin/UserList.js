//Imports
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Mongoose- To connect to my database
const mongoose = require('mongoose');

export class GradeList extends React.Component {
    //Constructor
    constructor() {
        super();
        //Delete Grade Binds
        this.DeleteGrade = this.DeleteGrade.bind(this);
    }

    //Giving database address
    main() {
        const users = mongoose.createConnection('mongodb+srv://user:pass@gradecluster.srojooy.mongodb.net/College?retryWrites=true&w=majority');

        const userSchema = new mongoose.Schema({
            collegeID: String,
            name: String,
            department: String,
            email: String,
            password: String
        });

        //Model to interact with databases
        const userModel = mongoose.model('listUsers', userSchema);
    }

//Render Page
render() {
    return;
}
}