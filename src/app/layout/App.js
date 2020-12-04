import React, { Fragment, useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/eventDashboard';
import NavBar from '../../features/nav/NavBar';

const App = () => {

  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event){
    setSelectedEvent(event);
    setFormOpen(true);
}

  function handleCreateFormOpen(){
    setSelectedEvent(null);
    setFormOpen(true)
  }

  return (
    <Fragment>
      <NavBar setFormOpen={handleCreateFormOpen}/>
      <Container className='main'>
        <EventDashboard 
              formOpen={formOpen} 
              setFormOpen={setFormOpen} 
              selectEvent={ handleSelectEvent}
              selectedEvent={selectedEvent}/>
      </Container>
    </Fragment>
  )
}

export default App;
