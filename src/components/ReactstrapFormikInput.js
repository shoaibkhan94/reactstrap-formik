import React from 'react';
import {FormFeedback, FormGroup, Input, Label} from "reactstrap";

const ReactstarpFormikInput = (
    {
        field: {...fields},
        form: {touched, errors, ...rest},
        ...props
    }) => (
    <FormGroup>
        <Label for={fields.name} className={"label-color"}>{props.label}</Label>
        <Input {...props} {...fields} invalid={Boolean(touched[fields.name] && errors[fields.name])}/>
        {touched[fields.name] && errors[fields.name] ? <FormFeedback>{errors[fields.name]}</FormFeedback> : ''}
    </FormGroup>
);
export default ReactstarpFormikInput;