import cuid from 'cuid';
import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux';
import { createEvent, updateEvent } from '../eventActions'; 
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { categoryData } from '../../../app/api/categoryOptions';
import MyDateInput from '../../../app/common/form/MyDateInput';

const EventForm = ({ match, history }) => {

    const dispatch = useDispatch();
    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id))

    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    }
    const validationSchema = Yup.object({
        title: Yup.string().required('Title is Required'),
        category: Yup.string().required('Category is Required'),
        description: Yup.string().required('Description is Required'),
        city: Yup.string().required('City is Required'),
        venue: Yup.string().required('Venue is Required'),
        date: Yup.string().required('Date is Required')
    })

    return (
        <Segment clearing>
            <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    selectedEvent 
                        ? dispatch(updateEvent({...selectedEvent, ...values})) 
                        : dispatch(createEvent({...values, id: cuid(), hostedBy: 'tausif', attendees: [], hostPhotoURL: '/assets/user.png' }));
                        history.push('/events');
                    }}>
                    {({isSubmitting, dirty, isValid}) => (
                        <Form className='ui form'>
                        <Header color='green' content='Event Details'/>
                            <MyTextInput name='title' placeholder='Event Title'/>
                            <MySelectInput name='category' placeholder='Category' options={categoryData}/>
                            <MyTextArea name='description' placeholder='Description' rows={3}/>
                        <Header color='green' content='Event Location Details'/>
                            <MyTextInput name='city' placeholder='City'/>
                            <MyTextInput name='venue' placeholder='Venue'/>
                            <MyDateInput 
                                name='date' 
                                placeholderText='Event Date'
                                timeFormat='HH:mm'
                                showTimeSelect
                                timeCaption='time'
                                dateFormat='MMMM d, yyyy h:mm a'/>
                        <Button 
                            as={Link} to='/events'
                            type='submit' 
                            floated='right' 
                            content='Cancel'
                            disabled={isSubmitting} />
                        <Button 
                            loading={isSubmitting} 
                            disabled={!isValid || !dirty || isSubmitting}
                            type='submit' 
                            floated='right' 
                            positive 
                            content={selectedEvent ? 'Update': 'Submit'} />
                    </Form>
                    )}     
            </Formik>
        </Segment>
    )
}

export default EventForm
