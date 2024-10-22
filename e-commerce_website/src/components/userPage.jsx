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
  <GetPastTransactions transactionData={props.history} /></>
  );

}

function favoriteProduct() {

}

//


function GetPastTransactions({transactionData}) {
  const products = transactionData[0];
  const prices = transactionData[1];
  const dates = transactionData[2];

  const productRows = [];
  for (let i = 0; i < products.length; i++) {
    productRows.push(
      <Transaction product={products[i]} price ={prices[i]} date={dates[i]}/>
    );
  }
  return (
    <div>
      <h2>History of Transactions:</h2>
      <table>
        <thead>
          <tr>
            <th >Product  </th>
            <th >Price  </th>
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

function Transaction(props) {
  return (
    <tr>
        <td >{props.product}</td>
        <td >${props.price.toFixed(2)}</td>
        <td >{props.date}</td>
      </tr>
    );
}




export default UserPage;
