import React from 'react'
import { Formik, Field, Form, FormikHelpers, useFormik } from 'formik';
import { config } from 'process';
import * as Yup from 'yup';

import { SchemaOf } from 'yup'


interface Values {
    firstName: string;
    lastName: string;
    email: string;
    message: string
}

const validationSchema: SchemaOf<Values> = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('sad')
})


const Contact = () => {

    // ******************* 1. way
    const { handleSubmit, handleChange, values, isSubmitting, errors } = useFormik<Values>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        validationSchema,

        onSubmit: async (values, bag) => {
            await new Promise((r) => setTimeout(r, 1000))
            console.log(values);
            console.log(bag);
            bag.resetForm();
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
                        value={values.firstName}
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Soyad"
                        onChange={handleChange}
                        value={values.lastName}
                        disabled={isSubmitting}
                    />
                </div>


                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={values.email}
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        placeholder="Message"
                        onChange={handleChange}
                        value={values.message}
                        disabled={isSubmitting}
                    />
                </div>


                <button type="submit" disabled={isSubmitting}>Kayıt Ol</button>
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