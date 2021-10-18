import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';

import Layout from './Hoc/Layout';

const App = () => (
  <Router>
    <Topbar />
    <Layout />
    <Switch>
      <Sidebar />
      <Route path='/' />
    </Switch>
  </Router>
);

export default App;
