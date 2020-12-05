import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/eventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';

const App = () => {

  return (
    <Fragment>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <Fragment>
          <NavBar/>
          <Container className='main'>
                <Route exact path='/events' component={EventDashboard} />
                <Route path='/events/:id' component={EventDetailedPage} />
                <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
          </Container>
        </Fragment>
      )}/>
    </Fragment>
  )
}

export default App;
