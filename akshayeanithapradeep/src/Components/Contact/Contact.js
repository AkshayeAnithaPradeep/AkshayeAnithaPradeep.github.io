import React, {Component} from 'react';
import './Contact.css'
import {contactImage} from "../../images";
import TextField from '@material-ui/core/TextField';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state= {
            submitted: false
        };
    }

    setClicked= () => {
        var form = document.getElementById('contact-form');
        var isValidForm = form.checkValidity();
        if(isValidForm){
            this.setState({
                submitted: true
            });
        }
    };

    render() {
        const {submitted} = this.state;
        return (
            <div className='contact-component'>
                <div className="mdl-grid portfolio-max-width portfolio-contact">
                    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                        <div className="mdl-card__title">
                            <h2 className="mdl-card__title-text">Contact Me</h2>
                        </div>
                        <div className="mdl-card__media">
                            <img className="article-image" src={contactImage} alt=""/>
                        </div>
                        <div className="mdl-card__supporting-text">
                            <p>
                                Please do contact me for any doubts, queries or help. I would welcome the chance to
                                provide further insight into my technical abilities, personal attributes and track
                                record of success in building defect-free software.
                            </p>
                            <p>
                                Leave a message below and I will get back to you at the earliest.
                            </p>
                            <form action="#" className="" autoComplete="off" id='contact-form'>
                                {submitted && <div className='alert-message'>
                                    This message has been sent!
                                </div>
                                }
                                <TextField
                                    className='text-input'
                                    id="outlined-name"
                                    label="Name"
                                    margin="normal"
                                    variant="outlined"
                                    required={true}
                                />
                                <TextField
                                    className='text-input'
                                    id="outlined-name"
                                    label="Email"
                                    type='email'
                                    margin="normal"
                                    variant="outlined"
                                    required={true}
                                />
                                <TextField
                                    className='text-input'
                                    id="outlined-name"
                                    label="Message"
                                    margin="normal"
                                    variant="outlined"
                                    required={true}
                                    multiline
                                />
                                <p>
                                    <button
                                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.setClicked}>
                                        Submit
                                    </button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;