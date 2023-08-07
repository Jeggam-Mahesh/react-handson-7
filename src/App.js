
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Handson7/Header';
import RoutesComp from './Handson7/RoutesComp';
import store from './app/store';
import './Handson7/styles.css'
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
       <Header/>
      <RoutesComp/>
      </BrowserRouter>
      </Provider>
      
     
      
    </div>
  );
}

export default App;
