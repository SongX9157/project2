import React from 'react';

export function Sample(){
    return(
        <div className="inner">
            <iframe width="1080" height="720" src="https://www.youtube.com/embed/tVfMySwUibQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <select id="options">
                <option>Tags</option>
                <option>Comments</option>
            </select>
            <form id="form">
                  <h1>month</h1>
                  <input type="text"></input>
                  <h1>day</h1>
                  <input type="text"></input>
                  <h1>subject</h1>
                  <textarea id="ta" placeholder="leave your message here..."></textarea>
                  <div class="btn">
                  <button class="button1" onclick="alert('Submitted, thank you!');">submit</button>
                  <button class="button1" type="button" onclick="document.getElementById('ta').value='';">clear</button>
                  </div>
            </form>
        </div>
    );
}