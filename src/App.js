import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Layout from './Hoc/Layout';

const App = () => (
  <Router>
    <Topbar />
    <Layout>
      <Sidebar />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default App;
