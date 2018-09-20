var _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import * as React from 'react';
import { FormGroup, Input, Label } from "reactstrap";

var handleBlur = function handleBlur(event) {
    if (_this.ignoreNextBlur === true) {
        // The parent components are relying on the bubbling of the event.
        event.stopPropagation();
        _this.ignoreNextBlur = false;
        event.target.name = _this.props.name;
        return;
    }
};

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
            { "for": field.name, className: "label-color" },
            props.inputprops.label
        ),
        React.createElement(
            Input,
            Object.assign({}, field, props, { type: "select", invalid: Boolean(touched[field.name] && errors[field.name]),
                onBlur: handleBlur(), placeholder: "Test" }),
            React.createElement(
                "option",
                { value: "" },
                props.inputprops.label
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
            "p",
            null,
            error
        )
    );
};

export default ReactstrapSelectInput;