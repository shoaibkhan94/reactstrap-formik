function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import * as React from 'react';
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

/*let handleBlur = event => {
    if (this.ignoreNextBlur === true) {
        // The parent components are relying on the bubbling of the event.
        event.stopPropagation();
        this.ignoreNextBlur = false;
        event.target.name = this.props.name;
        return;
    }
};*/

var ReactstrapSelectInput = function ReactstrapSelectInput(_ref) {
    var field = _ref.field,
        _ref$form = _ref.form,
        isSubmitting = _ref$form.isSubmitting,
        touched = _ref$form.touched,
        errors = _ref$form.errors,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === undefined ? false : _ref$disabled,
        props = _objectWithoutProperties(_ref, ["field", "form", "disabled"]);

    var error = errors[field.name];
    var touch = touched[field.name];
    return React.createElement(
        FormGroup,
        null,
        React.createElement(
            Label,
            { "for": props.inputprops.id, className: "label-color" },
            props.label
        ),
        React.createElement(
            Input,
            Object.assign({ id: props.inputprops.id }, field, props, { type: "select",
                invalid: Boolean(touched[field.name] && errors[field.name]),
                placeholder: "Test" }),
            React.createElement(
                "option",
                { value: "" },
                props.inputprops.defaultOption
            ),
            props.inputprops.options.map(function (option, index) {
                if (option.name) return React.createElement(
                    "option",
                    { value: option.id, key: index },
                    option.name
                );
                return React.createElement(
                    "option",
                    { value: option, key: index },
                    option
                );
            })
        ),
        touch && error && React.createElement(
            FormFeedback,
            null,
            error
        )
    );
};

export default ReactstrapSelectInput;