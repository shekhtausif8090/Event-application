import cuid from 'cuid';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react'

const EventForm = ({setFormOpen, setEvents, createEvent, selectedEvent, updateEvent}) => {

    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    }
    const [values, setValues] = useState(initialValues);

    function handleFormSubmit(){
        selectedEvent ? updateEvent({...selectedEvent, ...values}) : createEvent({...values, id: cuid(), hostedBy: 'tausif', attendees: [] });
        setFormOpen(false)
    }

    function handleInputChange(e){
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
        <Segment clearing>
            <Header content={ selectedEvent ? 'Edit Event': 'Create new event'} />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input 
                        type='text' 
                        placeholder='Event Title' 
                        name= 'title'
                        value={values.title} 
                        onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input 
                    type='text' 
                    placeholder='Category'
                    name= 'category'
                    value={values.category} 
                    onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input 
                        type='text' 
                        placeholder='Description'
                        name= 'description'
                        value={values.description} 
                        onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input 
                        type='text' 
                        placeholder='City'
                        name= 'city'
                        value={values.city} 
                        onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input 
                        type='text' 
                        placeholder='Venue'
                        name= 'venue'
                        value={values.venue} 
                        onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input 
                        type='date' 
                        placeholder='Date'
                        name= 'date'
                        value={values.date} 
                        onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Button 
                    as={Link} to='/events'
                    type='submit' 
                    floated='right' 
                    content='Cancel' />
                <Button type='submit' floated='right' positive content={selectedEvent ? 'Update': 'Submit'} />
            </Form>
        </Segment>
    )
}

export default EventForm
