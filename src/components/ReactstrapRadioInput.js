import * as React from 'react';
import {FormGroup, Input, Label} from "reactstrap";

const ReactstrapRadioInput = ({
                                  field,
                                  form: {isSubmitting, setFieldValue, touched, errors, values},
                                  disabled = false,
                                  ...props
                              }) => {
    return (
        <FormGroup check inline>
            <Label for="inp">
                <Input type="radio" name={field.name} checked={values[field.name] === field.value} value={field.value}
                       onChange={(event, value) => setFieldValue(field.name, field.value)}/>{props.label}
            </Label>
        </FormGroup>
    )
};

export default ReactstrapRadioInput;