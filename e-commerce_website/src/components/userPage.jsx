import React from 'react';
import '../styles.css';
import './Search'
import Search from './Search';
function UserPage(props) {
  return (
  <>
  <h1>
    Welcome to the e-commerce website, <div className="username">{props.username}</div>
  </h1> 
  <Search>
    
  </Search>
  <GetPastTransactions transactionData={props.history} /> 
  <div style={{ paddingTop: '20px' }}> 
    <GetFavProducts favProducts={props.favorite} />
  </div>
  <UserInfo info={props.user}/>
  </>
  );

}

function GetPastTransactions({transactionData}) {
  const products = transactionData[0];
  const prices = transactionData[1];
  const dates = transactionData[2];

  const productRows = [];
  for (var i = 0; i < products.length; i++) {
    productRows.push(
      <Transaction product={products[i]} price={prices[i]} date={dates[i]}/>
    );
  }
  return (
    <div>
      <h2>History of Transactions:</h2>
      <table className ="transactionTable">
        <thead>
          <tr>
            <th>Product </th>
            <th>Price </th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {productRows}
        </tbody>
      </table>
    </div>
  );
}

function GetFavProducts({favProducts}) {
  const favNames = favProducts[0];
  const favPrices = favProducts[1];
  const favDates = favProducts[2];

  const favProductRows = [];
  for (var i = 0; i < favProducts.length; i++) {
    favProductRows.push(<Transaction product={favNames[i]} 
                        price={favPrices[i]}
                        date={favDates[i]}/>);
  };
  return (
    <div>
      <h2>
        Favorite Products:
      </h2>
      <table className = "transactionTable" style={{ marginTop: '10px' }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {favProductRows}
        </tbody>
      </table>
    </div>
  );
}

function Transaction(props) {
  return (
    <tr>
        <td >{props.product}</td>
        <td >${props.price.toFixed(2)}</td>
        <td >{props.date}</td>
      </tr>
    );
}


function UserInfo(props){
  // name, email
  return(
  <div className= "userInfo">
    <h2>Profile Information:</h2>
  
      <p>
      <b> Name: </b> {props.info[0]}
      </p>
      <p>
      <b> Email: </b> {props.info[1]}
      </p>
    
    
  </div>
  );
}



export default UserPage;
