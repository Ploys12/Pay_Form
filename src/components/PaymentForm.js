import { useState } from 'react';

function PaymentForm({ operator, onPaymentSubmit }) {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');

  const handlePhoneChange = event => {
    setPhone(event.target.value);
  };

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const response = { success: Math.random() < 0.5 };
    onPaymentSubmit(response);
  };

  const validatePhoneNumber = () => {
    const phoneNumberPattern = /^(\+7|8)\d{10}$/;
    return phoneNumberPattern.test(phone);
  };

  const validateAmount = () => {
    return amount >= 1 && amount <= 1000;
  };

  const handleSubmitButtonClick = () => {
    if (!validatePhoneNumber()) {
      alert('Введите российский номер');
      return;
    }
    if (!validateAmount()) {
      alert('Введите сумму от 1 до 1000 рублей');
      return;
    }
    // Submit payment form to server
    const response = { success: Math.random() < 0.5 };
    onPaymentSubmit(response);
  };

  return (
    <div>
      <h2>Оплата: {operator}</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="phone">Номер телефона:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="+7 123 456-78-90"
          />
        </div>
        <div>
          <label htmlFor="amount">Сумма:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            min="1"
            max="1000"
            step="1"
          />
        </div>
        <button type="button" onClick={handleSubmitButtonClick}>
          Оплатить
        </button>
      </form>
    </div>
  );
}
export default PaymentForm