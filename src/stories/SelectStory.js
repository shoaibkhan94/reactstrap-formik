import React from 'react';
import {Field, Form, Formik} from 'formik';
import SelectInput from '../components/ReactstrapSelectInput';
import {action} from '@storybook/addon-actions';
import {Col, Container, Row} from "reactstrap";

export default () => (
    <Formik
        initialValues={{country: '', prefilled_country: 'India'}}
        validate={values => {
            const errors = {};
            if (!values.country) {
                errors.country = 'Required';
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
                                label="Country"
                                name="country"
                                component={SelectInput}
                                inputprops={{
                                    name: 'country',
                                    id: 'country',
                                    options: ['India', 'USA', 'UK', 'Saudi Arabia'],
                                    label: "Country"
                                }}>
                            </Field>
                        </Col>
                        <Col xs="12">
                            <Field
                                label="Pre Filled Country"
                                name="prefilled_country"
                                component={SelectInput}
                                inputprops={{
                                    name: 'country',
                                    id: 'country',
                                    options: ['India', 'USA', 'UK', 'Saudi Arabia'],
                                    label: "Country"
                                }}>
                            </Field>
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