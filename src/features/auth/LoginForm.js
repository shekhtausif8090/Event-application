import React from 'react'
import ModalWrapper from '../../app/common/modals/ModalWrapper'
import { Formik, Form } from 'formik';
import { Button, Label, Divider } from 'semantic-ui-react';
import * as Yup from 'yup';
import MyTextInput from '../../app/common/form/MyTextInput';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../app/common/modals/modalReducer';
import { signInUser } from './authActions';

const LoginForm = () => {
    const dispatch = useDispatch();

    return (
        <ModalWrapper size='mini' header='SignIn to Event'>
            <Formik initialValues={{email: '', password: ''}} validationSchema={Yup.object({
                email: Yup.string().required().email(),
                password: Yup.string().required()
                })}
                onSubmit={(values, {setSubmitting}) => {
                   dispatch(signInUser(values));
                   setSubmitting(false);
                   dispatch(closeModal())
                }}
            >
                 {({isSubmitting, isValid, dirty}) => (
                     <Form className='ui form'>
                        <MyTextInput name='email' placeholder='Email Address' />
                        <MyTextInput name='password' placeholder='Password' type='password' />
                        <Button 
                            loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            type='submit'
                            fluid
                            size='large'
                            color='teal'
                            content='Login'
                        />
                     </Form>
                 )}
            </Formik>

        </ModalWrapper>
    )
}

export default LoginForm
