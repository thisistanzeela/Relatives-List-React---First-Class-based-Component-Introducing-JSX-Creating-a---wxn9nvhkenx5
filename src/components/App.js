import React, {Component, useState} from "react";
import '../styles/App.css';

const relativeList = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
             <h1>Relatives to visit:</h1>
              <ol>
                    {relativeList.map((relative) => (
                      <li key={relative.id}>{relative.name}</li>
                    ))}
              </ol>
            </div>
        )
    }
}


export default App;
