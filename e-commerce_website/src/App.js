import React from 'react';

//import Search from './components/Search.jsx';

import UserPage from './components/userPage.jsx';

function App() {
    let histData = [["product1", "product2", "product3", "product4"],
                    [50,40,30,20],
                    ["2/23/24","4/20/24","7/6/24","8/21/24"]]
    return (
        <div>
            <UserPage username="Prahit" history={histData}> </UserPage>
         </div>
    );
}

export default App;



