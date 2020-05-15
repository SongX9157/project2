import React from 'react';
import './App.css';

import {Swatch} from './swatch.js'
import {Header} from './header.js'
import{Sample} from './sample.js'
import {useSelector} from 'react-redux';


function App() {
  const datas = useSelector(state => state.datas);
  return ( 
   <div id="root">
     <div id="head">
     <Header/>
     </div>
     <div id="sample">
       <Sample/>
     </div>
     <div id="games">
     {datas.map(swatch=><Swatch swatch={swatch}/>)}
     </div>
   </div>
  );
}

export default App;
