import React, {Component, useState} from "react";
import '../styles/App.css';


const relatives = [
     { name: 'Relative 1', id: 'relativeListItem1' },
    { name: 'Relative 2', id: 'relativeListItem2' },
    { name: 'Relative 3', id: 'relativeListItem3' },
    { name: 'Relative 4', id: 'relativeListItem4' }
    ];

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
            <ol key="relativeList">
      {relatives.map((relative) => (
        <li key={relative.id}>{relative.name}</li>
      ))}
    </ol>
            </div>
        )
    }
}


export default App;
