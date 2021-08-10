import './App.css';
import Login from './components/login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import TokensList from './components/tokensList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from "history";
export const history= createBrowserHistory();


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/tokens" component={TokensList}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </Router>
      </Provider> 
    </div>
  );
}

export default App;
