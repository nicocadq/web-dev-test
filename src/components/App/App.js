import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from 'components/Home';
import { Meetings } from 'components/Meetings';
import { CreateMeeting } from 'components/CreateMeeting';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/meetings" exact>
        <Meetings />
      </Route>
      <Route path="/create-meeting" exact>
        <CreateMeeting />
      </Route>
    </Switch>
  </BrowserRouter>
);

export { App };
