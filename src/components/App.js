import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
            <ol key="relativeList">
                  <li key="relativeListItem1">Amit</li>
                  <li key="relativeListItem2">Bhavna</li>
                  <li key="relativeListItem3">Chandan</li>
                  <li key="relativeListItem4">Divya</li>
                  <li key="relativeListItem5">Esha</li>
            </ol>
            </div>
        )
    }
}


export default App;
