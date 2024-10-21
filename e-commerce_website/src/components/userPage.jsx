import React from 'react';
import '../styles.css';
function UserPage(props) {
  return (<><h1>Welcome to the e-commerce website, {props.username} </h1>
  <GetPastTransactions transactionData={props.history} /></>
  );

}



function GetPastTransactions({transactionData}) {
  const products = transactionData[0];
  const prices = transactionData[1];
  const dates = transactionData[2];

  
  const productRows = [];
  for (let i = 0; i < products.length; i++) {
    productRows.push(
      <tr>
        <td >{products[i]}</td>
        <td >{prices[i]}</td>
        <td >{dates[i]}</td>
      </tr>
    );
  }
  return (
    <div>
      <h2>History of Transactions:</h2>
      <table className="tableStyle">
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








export default UserPage;
