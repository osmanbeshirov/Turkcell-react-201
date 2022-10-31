import React from 'react'
import { Formik, Field, Form, FormikHelpers, useFormik } from 'formik';


interface Values {
    firstName: string;
    lastName: string;
    email: string;
}



const Contact = () => {

    // const { handleSubmit, handleChange, values, errors } = useFormik({
    //     initialValues: {
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //     },
    //     onSubmit: values => {
    //         console.log(values);
    //     },
    // });

    return (
        <div>
            <h2>Contact</h2>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}

                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                    
                ) => {

                    console.log(values);
                    setSubmitting(false);
                }}
            >
                {
                    ({ handleSubmit, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" name="firstName" placeholder="John" onChange={handleChange('firstName')} />

                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" name="lastName" placeholder="Doe" onChange={handleChange('lastName')} />

                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                placeholder="john@acme.com"
                                type="email"
                                onChange={handleChange('email')}
                            />

                            <button type="submit">Submit</button>
                        </form>
                    )
                }

            </Formik>



            {/* <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}

                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {

                    console.log(values);
                    setSubmitting(false);

                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="John" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe" />

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="john@acme.com"
                        type="email"
                    />

                    <button type="submit">Submit</button>
                </Form>
            </Formik> */}


        </div>
    )
}

export default Contact