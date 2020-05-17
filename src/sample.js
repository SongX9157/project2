import React from 'react';

import {useDispatch} from 'react-redux';
import {startAddingMessage, startAddingTag} from './action.js';




export function Sample(){
    const dispatch = useDispatch();
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    const onAdd = () =>{
        var message = document.getElementById('ta').value;
        var option = document.getElementById('options').value;
        if(option==="Comment")
        {
            dispatch(startAddingMessage(year, month, day, message));
        }
        else dispatch(startAddingTag(message));
        alert('Submitted, thank you!');
    }

    const clear = () =>{
        document.getElementById('ta').reset();
    }



    window.onload = function(){
        this.setInterval(function(){
            var start = new Date();
            var end = new Date("2020-5-29 09:00:00");
            var seconds = parseInt((end.getTime() - start.getTime()) / 1000);
            var day = parseInt(seconds / 3600 / 24);
            var hour = parseInt(seconds / 3600 % 24);
            var minute = parseInt(seconds / 60 % 60);
            var second = parseInt(seconds % 60);
            document.getElementById("timer").innerHTML =  day +" D " + hour + " H " + minute + " M " + second;
        }, 1000);
    }

    return(
        <div className="inner">
            <div id="countdown">
                <h1 id="timer"> </h1>
                <h1>to release day</h1>
            </div>
            <iframe  title="game" src="https://www.youtube.com/embed/tVfMySwUibQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>

            <select id="options">
                <option>Tags</option>
                <option>Comments</option>
            </select>
            <form id="form">
                  <h1>Subject</h1>
                  <textarea id="ta" placeholder="leave your message here..."></textarea>
                  <div className="btn">
                  <button className="button1" onClick={onAdd}>submit</button>
                  <button className="button1" onClick={clear}>clear</button>
                  </div>
            </form>
        </div>
    );
}