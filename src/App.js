import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/StockRow';

const App = () => {
  return(
    <>
    <div></div>
    <div></div>
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <StockRow ticker="amzn" />
        <StockRow ticker="fb" />
        <StockRow ticker="goog" />
        <StockRow ticker="appl" />
      </tbody>
    </table>
    </>
  );
};
export default App;