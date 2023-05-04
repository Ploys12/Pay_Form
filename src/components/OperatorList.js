import React, { useState } from 'react';


function OperatorList({ operators, onOperatorSelect }) {
  const [expanded, setExpanded] = useState(false);

  const handleOperatorSelect = operator => {
    onOperatorSelect(operator);
    setExpanded(false);
  };

  return (
    <div>
      <div onClick={() => setExpanded(!expanded)} className='operators'>Операторы</div>
      {expanded && (
        <ul>
          {operators.map(operator => (
            <li key={operator} onClick={() => handleOperatorSelect(operator)}>
              {operator}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OperatorList;
