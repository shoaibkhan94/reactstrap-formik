import React from 'react';
import {Field, Form, Formik} from 'formik';
import RadioInput from '../components/ReactstrapRadioInput';
import {action} from '@storybook/addon-actions';
import {Col, Container, Row} from "reactstrap";

export default () => (
    <Formik
        initialValues={{available: ''}}
        validate={values => {
            const errors = {};
            if (!values.available) {
                errors.available = 'Required';
            }
            return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {

            console.log(values);
            //Make API calls here

            setTimeout(() => {
                setSubmitting(false);
                action('submit')(values);
                alert(`Submitted Successfully ->  ${JSON.stringify(values, null, 2)}`)
            }, 2000);
        }}
        render={({submitForm, isSubmitting, values}) => (
            <Form>
                <Container style={{paddingTop: '5px'}}>
                    <Row>
                        <Col xs="12">
                            <legend className="col-form-label col-sm-2">Available</legend>
                            <Col sm={10}>
                                <Field id="isAvailable" name="available" component={RadioInput} value="true" type="radio"
                                       label="True">
                                </Field>
                                <Field id="isNotAvailable" name="available" component={RadioInput} value="false"
                                       type="radio"
                                       label="False">
                                </Field>
                            </Col>
                        </Col>
                        <Col xs="12">
                            <button
                                type="submit"
                            >
                                Submit
                            </button>
                        </Col>
                    </Row>
                    <pre>
                        {JSON.stringify(values, null, 2)}
                    </pre>
                </Container>
            </Form>
        )}
    />
);