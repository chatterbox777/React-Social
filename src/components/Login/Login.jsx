import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utilities/validators/validators';


const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name = {'login'} component = {Input} validate = {[required, maxLength10]} />
            </div>
            <div>
                <Field placeholder={'Password'} name = {'password'} component = {Input} validate = {[required, maxLength10]} />
            </div>
            <div>
                <Field component = {Input} name = {'rememberMe'} type={'checkbox'}  /> Remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
        )
}


const LoginReduxForm = reduxForm({
    // a unique name for the form
form: 'login'
})(LoginForm)

const Login = (props) => {

  const  onSubmit = (formData) => {
console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit = {onSubmit} />
    </div>
}

export default Login;