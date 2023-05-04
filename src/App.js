import React, { useState } from 'react';
import OperatorList from './components/OperatorList';
import PaymentForm from './components/PaymentForm';
import api from './api';

const operators = ['МТС', 'Билайн', 'Мегафон'];

function App() {
  const [operator, setOperator] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleOperatorSelect = operator => {
    setOperator(operator);
    setPaymentSuccess(false);
  };

  const handlePaymentSubmit = async response => {
    setPaymentSuccess(response.success);
    setOperator(null);
  };

  const handleBackToOperatorsClick = () => {
    setOperator(null);
    setPaymentSuccess(false);
  };

  return (
    <div>
      {!operator && (
        <OperatorList operators={operators} onOperatorSelect={handleOperatorSelect} />
      )}
      {operator && (
        <PaymentForm operator={operator} onPaymentSubmit={handlePaymentSubmit} />
      )}
      {paymentSuccess && (
        <div>
          Payment successful!{' '}
          <button onClick={handleBackToOperatorsClick}>Вернуться</button>
        </div>
      )}
    </div>
  );
}


export default App;