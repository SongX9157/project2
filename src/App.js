import React, {useEffect} from 'react';
import './App.css';
import {Tag} from './swatch.js';
import {Header} from './header.js';
import {Sample} from './sample.js';
import {useSelector, useDispatch} from 'react-redux';
import {loadMessage} from './action.js';
import{Comment} from './comment.js';


function App() {
  const datas = useSelector(state => state.datas);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(loadMessage('xenoblade'));
  },[dispatch]);
  return ( 
   <div id="root">
     <div id="head">
     <Header/>
     </div>
     <div id="sample">
       <Sample/>
     </div>
     <div id="frame">
       <div id="left">
         <h1>Tags</h1>
        <div id="tag">
          {datas.map(tag => <Tag key={tag.id} tag={tag}/>)}
        </div>
       </div>
       <div id="right">
         <h1>Comments</h1>
        <div id="comment">
          {datas.map(comment=><Comment key={comment.id} comment={comment}/>)}
          
          {datas.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
        </div>
     </div>
   </div>
  );
}

export default App;
