import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Layout from './Hoc/Layout';
import NewProduct from './Pages/NewProduct';
import NewUser from './Pages/NewUser';

const App = () => (
  <Router>
    <Topbar />
    <Layout>
      <Sidebar />
      <Switch>
        <Route path='/newUser'>
          <NewUser />
        </Route>
        <Route path='/newproduct'>
          <NewProduct />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default App;
