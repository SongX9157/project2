import React, {useEffect} from 'react';
import './App.css';
import {Tag} from './swatch.js';
import {Header} from './header.js';
import {Sample} from './sample.js';
import {useSelector, useDispatch} from 'react-redux';
import {loadMemories} from './action';
import{Comment} from './comment.js'


function App() {
  const datas = useSelector(state => state.datas);
  const dispach = useDispatch();

  useEffect( () =>{
    dispach(loadMemories([
      {id:1, month: 1, day: 20,message: "Good game." },
      {id:2, month: 3, day: 12,message: "Not good for the new player." },
    ]));
  },[dispach]);
  return ( 
   <div id="root">
     <div id="head">
     <Header/>
     </div>
     <div id="sample">
       <Sample/>
     </div>
     <div id="frame">
        <div id="tag">
          {datas.map(tag=><Tag key={tag.id} tag={tag}/>)}
        </div>
        <div id="comment">
        {datas.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
     </div>
   </div>
  );
}

export default App;
