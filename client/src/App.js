import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';

import NavBar from './components/NavBarComp';
import Main from './views/MainView';

////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////

/**
 * Root Application
 * @returns HTML for the Root Application
 */
const App = () => {
  // //// OUTPUT ///////////////////////////////////
  return (
      <BrowserRouter>
        <div className='root'>
        {/* **** NAVIGATION BAR ********* */}
        <NavBar />
        <Switch >
          {/* **** MAIN COMPONENT ********** */}
          <Main />
        </Switch>

        </div>
      </BrowserRouter>
  );
}

export default App;