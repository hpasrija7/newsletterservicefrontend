import React from 'react';
import './App.css';
import UserReviewCard from './components/UserReviewCard';
import MonthlyPlanSection from './components/MonthlyPlanSection';
import FAQSection from './components/FAQSection';

function App() {
  return (
    <div className="App">
      <h2>What parents are saying about our new feature</h2>
      <div className="top-section">
        <UserReviewCard name="Chavi Kaushik" review="I was struggling to breastfeed my 3 months baby & PLUS workshops helped me a lot" rating={4} />
        <UserReviewCard name="Shweta" review="I have been using Parentune  PLUS since the first month of my pregnancy. It has been a great experience" rating={5}/>
        <UserReviewCard name="Geetanjali" review="I get all my queries answered by Doctors. Have used PLUS for somtime and suggestd to .." rating={5}/>
        <UserReviewCard name="Himanshi" review="Prantune has helped me at all stage. " rating={5}/>
      </div>
      <MonthlyPlanSection />
      <FAQSection />
    </div>
  );
}

export default App;
