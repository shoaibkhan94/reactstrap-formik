import React from 'react';
import {Field, Form, Formik} from 'formik';
import TextField from '../components/ReactstrapFormikInput';
import {action} from '@storybook/addon-actions';
import {Col, Container, Row} from "reactstrap";

export default () => (
    <Formik
        initialValues={{email: '', password: ''}}
        validate={values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
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
                            <Field
                                type="email"
                                label="Email"
                                name="email"
                                component={TextField}
                            />
                        </Col>
                        <Col xs="12">
                            <Field
                                type="password"
                                label="Password"
                                name="password"
                                component={TextField}
                            />
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