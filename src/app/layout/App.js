import React, { Fragment, useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/eventDashboard';
import NavBar from '../../features/nav/NavBar';

const App = () => {

  const [formOpen, setFormOpen] = useState(false);

  return (
    <Fragment>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </Fragment>
  )
}

export default App;
