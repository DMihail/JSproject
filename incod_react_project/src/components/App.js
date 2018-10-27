import List from './List'
import React from 'react'
import articles from  '../clients'
function App() {
    return(
        <div>
            <List articles={articles}/>
        </div>
    )
}
export default App;