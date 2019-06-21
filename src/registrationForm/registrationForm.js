import React from 'react';
import ValidationError from './validationError';

import './registrationForm.css';

export default class registrationForm extends React.Component {
    constructor(props) {
        super(props);
        //this.nameInput = React.createRef(); // The ref way, where state is handled in DOM
        this.state = { // the controlled componenet way, using React state
            name: '',
            password: '',
            repeatPassword: '',
            nameValid: false,
            passwordValid: false,
            passwordMatch: false,
            formValid: false,
            validationMessages: {
                name: '',
                password: '',
                repeatPassword: '',
            }
        }
    }

    // Controlled component, handlers to update state
    updateName(name) {
        this.setState({name}, () => {this.validateName(name)});
    }

    updatePassword(password) {
        this.setState({password}, () => {this.validatePassword(password)});
    }

    updateRepeatPassword(repeatPassword) {
        this.setState({repeatPassword}, () => {this.matchPassword(repeatPassword)});
    }
    // --------------------------------------

    formValid() {
        this.setState({
            formValid: this.state.nameValid && this.state.passwordValid && this.state.passwordMatch,
        });
    }

    validateName(fieldValue) {
        const fieldErrors = {...this.state.validationMessages};
        let hasError = false;

        fieldValue = fieldValue.trim();
        if(fieldValue.length === 0) {
            fieldErrors.name = 'Name is required';
            hasError = true;
        } else {
            if(fieldValue.length < 3) {
                fieldErrors.name = 'Name must be at least 3 charactgers long';
                hasError = true;
            } else {
                fieldErrors.name = '';
                hasError = false;
            }
        }

        this.setState({
            validationMessages: fieldErrors,
            nameValid: !hasError,
        }, this.formValid); // set state based on validation rules, call optional callback func when state is updated
        //This is because setState is asynchronous and when there are many calls it can be batched. So you can never
        //rely on the state being updated immediately after a call to setState. Instead, if you depend on the value
        //of state after setState, use the call function.
    }

    validatePassword(fieldValue) {
        const fieldErrors = {...this.state.validationMessages};
        let hasError = false;

        fieldValue = fieldValue.trim();
        if(fieldValue.length === 0) {
            fieldErrors.password = 'Password is requried';
            hasError = true;
        } else {
            if(fieldValue.length < 6 || fieldValue.length > 72) {
                fieldErrors.password = 'Password must be between 6 and 72 character long';
                hasError = true;
            } else {
                if(!fieldValue.match(new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/))) {
                    fieldErrors.password = 'Password must contain at least one letter and one number';
                    hasError = true;
                } else {
                    fieldErrors.password = '';
                    hasError = false;
                }
            }
        }

        this.setState({
            validationMessages: fieldErrors,
            passwordValid: !hasError,
        }, this.formValid);
    }

    matchPassword(fieldValue) {
        const fieldErrors = {...this.state.validationMessages};
        let hasError = false;

        const password = this.state.password;

        if(fieldValue !== password) {
            fieldErrors.repeatPassword = 'Passwords do not match';
            hasError = true;
        } else {
            fieldErrors.repeatPassword = '';
            hasError = false;
        }

        this.setState({
            validationMessages: fieldErrors,
            passwordMatch: !hasError,
        }, this.formValid);
    }

    handleSubmit(event) {
        event.preventDefault();
        //const name = this.nameInput.current.value; // The ref way
        const {name, password, repeatPassword} = this.state;

        console.log('Name: ', name);
        console.log('Password: ', password);
        console.log('RepeatPassword: ', repeatPassword);
    }

    render() {
        return(
            <form className='registration' onSubmit={e => this.handleSubmit(e)}>
                <h2>Register</h2>
                <div className='registration__hint'>* required field</div>
                <div className='form-group'>
                    <label htmlFor='name'>Name *</label>
                    {/* <input type='text' className='registration__control' name='name' id='name' ref={this.nameInput} defaultValue='Frank' /> */} {/* // the ref way */}
                    <input type='text' className='registration__control' name='name' id='id' onChange={e => this.updateName(e.target.value)} />
                    <ValidationError hasError={!this.state.nameValid} message={this.state.validationMessages.name} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password *</label>
                    <input type='password' className='registration__control' name='password' id='password' onChange={e => this.updatePassword(e.target.value)} />
                    <div className='registration__hint'>6 to 72 characters, must include a number</div>
                    <ValidationError hasError={!this.state.passwordValid} message={this.state.validationMessages.password} />
                </div>
                <div className='form-group'>
                    <label htmlFor='repeatPassword'>Repeat Password *</label>
                    <input type='password' className='registration__control' name='repeatPassword' id='repeatPassword' onChange={e => this.updateRepeatPassword(e.target.value)} />
                    <ValidationError hasError={!this.state.passwordMatch} message={this.state.validationMessages.repeatPassword} />
                </div>
                <div className='registration__button__group'>
                    <button type='reset' className='registration__button'>Cancel</button>
                    <button type='submit' className='registration__button' disabled={!this.state.formValid}>submit</button>
                </div>
            </form>
        )
    }
}