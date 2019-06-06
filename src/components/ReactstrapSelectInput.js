import * as React from 'react';
import {FormFeedback, FormGroup, Input, Label} from "reactstrap";

/*let handleBlur = event => {
    if (this.ignoreNextBlur === true) {
        // The parent components are relying on the bubbling of the event.
        event.stopPropagation();
        this.ignoreNextBlur = false;
        event.target.name = this.props.name;
        return;
    }
};*/

const ReactstrapSelectInput = ({
                                   field,
                                   form: {isSubmitting, touched, errors},
                                   disabled = false,
                                   ...props
                               }) => {
    let error = errors[field.name];
    let touch = touched[field.name];
    let label = props.label ? <Label for={props.inputprops.id} className={"label-color"}>{props.label}</Label> : null;
    return (
        <FormGroup>
            {label}
            <Input id={props.inputprops.id} {...field} {...props} type="select"
                   invalid={Boolean(touched[field.name] && errors[field.name])}
                   placeholder="Test">
                <option value="">{props.inputprops.defaultOption}</option>
                {props.inputprops.options.map((option, index) => {
                    if (option.name)
                        return (<option value={option.id} key={index}>{option.name}</option>);
                    return (<option value={option} key={index}>{option}</option>)
                })}
            </Input>
            {touch && error && <FormFeedback>{error}</FormFeedback>}
        </FormGroup>
    )
};

export default ReactstrapSelectInput;
