import React from 'react'
import { Formik, Field, Form, FormikHelpers, useFormik } from 'formik';
import { config } from 'process';


interface Values {
    firstName: string;
    lastName: string;
    email: string;
    message: string
}


const Contact = () => {

    // ******************* 1. way
    const { handleSubmit, handleChange } = useFormik<Values>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },

        onSubmit: values => {
            console.log(values)
        }

    });

    return (
        <div>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} className='form' >
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Ad"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Soyad"
                        onChange={handleChange}
                    />
                </div>


                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        placeholder="Message"
                        onChange={handleChange}
                    />
                </div>


                <button type="submit">Kayıt Ol</button>
            </form>


            {/* ******************************* 2. way */}
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

            </Formik> */}


            {/* ****************** 3. way */}
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