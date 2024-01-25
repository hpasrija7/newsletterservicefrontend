import React from 'react';

const MonthlyPlanSection = () => (
  <div className="monthly-plan-section" style={{ backgroundColor: 'pink' }}>
    <div className="plan-details">
      <h2>Try our monthly plan instead</h2>
      <div style={{ backgroundColor: '#F6934C', width: '300px', padding: '20px', boxSizing: 'border-box', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p>1 Month</p>
        <p>Rs199/month</p>
        <button style={{ backgroundColor: '#fff', color: '#333', border: '1px solid #F6934C', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>Buy now</button>
      </div>
    </div>
  </div>
);

export default MonthlyPlanSection;
