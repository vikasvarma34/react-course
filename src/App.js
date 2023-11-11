import React from 'react';
import './App.css';
import Index from "./1-useState/starter/1-useState-basics"
import Index2 from "./1-useState/starter/2-useState-advanced"
import Index3 from './1-useState/starter/3-useState-Example1';
import Index4 from './1-useState/starter/4-useState-Example2';
import Index5 from './1-useState/starter/5-useState-Example3';
function App() {
  
 

  return (
    <div className="App">
     <Index /><br/><hr />
     <Index5 /><br/><hr />
     <Index2 /><br/><hr />
     <Index3 /><br/><hr />
     <Index4 /><br/><hr />
    </div>
  );
}


export default App;
