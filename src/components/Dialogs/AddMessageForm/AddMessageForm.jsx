import React from 'react';
import { Field, reduxForm } from "redux-form";
import { TextArea } from '../../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utilities/validators/validators';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    
    return (
       
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component={TextArea} validate = {[required, maxLength50]} name='newMessageBody' placeholder='Enter your message' />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm)