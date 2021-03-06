import React, { Component } from 'react';

// Redux config
import { Provider } from 'react-redux';
import store from './store';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <div className="App">
               <AppNavBar/>
               <ItemModal />
               <ShoppingList/>
            </div>
         </Provider>
      ); 
   }
}

export default App;