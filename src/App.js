import React from 'react';
import './App.css';

import {Swatch} from './swatch.js'
import {Header} from './header.js'
import{Sample} from './sample.js'

function App() {
  return ( 
   <div id="root">
     <div id="head">
     <Header/>
     </div>
     <div id="sample">
       <Sample/>
     </div>
     <div id="games">
     <Swatch />
     <Swatch />
     <Swatch />
     <Swatch />
     <Swatch />
     <Swatch />
     </div>
   </div>
  );
}

export default App;
