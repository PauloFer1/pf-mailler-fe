import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

class Form extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name: '',
            subject: '',
            email: '',
            body: ''
        };

        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField(field, value) {
        this.setState({ [field]: value });
    }

    handleSubmit(event) {
        axios.post("https://pf-mailler.herokuapp.com/send",
            { "emailParameters": {
                    "to" : "paulo.r.r.fernandes@gmail.com",
                    "from" : this.state.email,
                    "subject" : this.state.subject,
                    "body" : this.state.body
                }
            })
            .then(res => {
            console.log(res);
            console.log(res.data);
        })
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }

    render () {
        return (
            <div class="contact1">
            <div class="container-contact1">
            <div class="contact1-pic js-tilt" data-tilt>
                <img src="images/img-01.png" alt="IMG" />
            </div>
            <form className="Email Sender" onSubmit={this.handleSubmit} class="contact1-form validate-form">
            <h2>Keep in touch!</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" name="name" value={this.state.name}
                    onChange={(event) => this.updateField('name', event.target.value)} class="input1"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" name="email" value={this.state.email}
                    onChange={(event) => this.updateField('email', event.target.value)} class="input1" />
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input type="text" className="form-control" name="subject" value={this.state.subject}
                    onChange={(event) => this.updateField('subject', event.target.value)} class="input1"/>
            </div>
            <div className="form-group">
                <label htmlFor="body">Body:</label>
                <input type="text" className="form-control" name="body" value={this.state.body}
                    onChange={(event) => this.updateField('body', event.target.value)} class="input1"/>
            </div>
            <button type="submit" className="btn btn-primary" class="contact1-form-btn">
                <span>
                    Send Email
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
            </button>
            </form>
            </div>
            </div>
            )
        }
}

export default Form;