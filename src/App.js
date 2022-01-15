import logo from './logo.svg';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
