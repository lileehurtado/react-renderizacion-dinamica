import React from 'react';

const Alert = ({ alerta }) => {
  const { alertText, alertCase, alertStatus } = alerta;

  return (
    <div className='alert-box col-12 col-lg-3 text-center'>
      {alertStatus && (
        <div className={`alert ${alertCase}`}>
          <span>{alertText}</span>
        </div>
      )}
    </div>
  );
};

export default Alert;