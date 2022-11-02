import React from 'react'
import * as Yup from 'yup';
import { SchemaOf } from 'yup';

export interface Values {
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
    message: Yup.string().min(5).required('sad')
})

export default validationSchema;


