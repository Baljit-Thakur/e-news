import React from 'react';
import './App.css'; // Import global styles
//import Dashboard from './components/dashboard'; // Import the Dashboard component
//import ProfilePage from './components/profilepage'; // Import the ProfilePage component
import AddedNews from './components/AddedNews';

function App() {
  return (
    <div className="App">
      <AddedNews /> {/* Render the Dashboard component */}
    </div>
  );
}

export default App;