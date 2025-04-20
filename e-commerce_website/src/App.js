import React from 'react';
import Search from './components/Search.jsx';
import UserPage from './components/userPage.jsx';

function App() {
    let histData = [["product1", "product2", "product3", "product4"],
                    [50, 40, 30, 20],
                    ["2/23/24", "4/20/24", "7/6/24", "8/21/24"]];

    let favData = [["product1", "product2", "product3", "product4"],
                   [50, 40, 30, 20],
                   ["2/23/24", "4/20/24", "7/6/24", "8/21/24"]];

    let userInfo = ["Prahit Yaugand", "randomperson@illinois.edu"];

    let productsSold = [["product1", "product2", "product3"],
                        [50, 40, 30],
                        ["2/15/24", "3/20/24", "4/24/24"],
                        ["Sold", "On Market", "Sold"],
                        ["3/15/24", "", "3/27/24"]];
    return (
        <div>
            <UserPage 
                username="Prahit" history={histData} favorite={favData} user={userInfo}  productsSoldInfo={productsSold}/>
            <Search />
        </div>
    );
}

export default App;
