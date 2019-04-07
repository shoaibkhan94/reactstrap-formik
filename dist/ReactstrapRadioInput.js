function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import * as React from 'react';
import { FormGroup, Input, Label } from "reactstrap";

var ReactstrapRadioInput = function ReactstrapRadioInput(_ref) {
    var field = _ref.field,
        _ref$form = _ref.form,
        isSubmitting = _ref$form.isSubmitting,
        setFieldValue = _ref$form.setFieldValue,
        touched = _ref$form.touched,
        errors = _ref$form.errors,
        values = _ref$form.values,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === undefined ? false : _ref$disabled,
        props = _objectWithoutProperties(_ref, ["field", "form", "disabled"]);

    return React.createElement(
        FormGroup,
        { check: true, inline: true },
        React.createElement(
            Label,
            { "for": props.id },
            React.createElement(Input, Object.assign({}, props, { type: "radio", name: field.name, checked: values[field.name] === field.value, value: field.value,
                onChange: function onChange(event, value) {
                    return setFieldValue(field.name, field.value);
                } })),
            props.label
        )
    );
};

export default ReactstrapRadioInput;