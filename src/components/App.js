import React, {Component, useState} from "react";
import '../styles/App.css';


const relatives = ['John', 'Mary', 'David', 'Sarah'];

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
              <ol>
      {relatives.map((relative, index) => (
        <li key={`relativeListItem${index + 1}`}>{relative}</li>
      ))}
    </ol>
            </div>
        )
    }
}


export default App;
