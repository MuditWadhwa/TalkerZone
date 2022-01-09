
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ChatPage from './Pages/ChatPage';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route  path='/' component={Homepage} exact/>
      <Route  path="/chats" component={ChatPage} />
    </Switch>
      
    </div>
  );
}

export default App;
