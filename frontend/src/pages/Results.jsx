import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
// import About from '../components/About';
import Tips from '../components/Tips';
import QueryQuill from '../components/QueryQuill';
import Style from '../components/Style';
import Header from '../components/Header';
import ResumeView from '../components/ResumeView';
import SkillBoost from '../components/SkillBoost';


function Results() {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'tips':
        return <Tips/>;
      case 'queryquill':
        return <QueryQuill />;
      case 'style':
        return <Style />;
      case 'skillboost':
        return <SkillBoost />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />
      <div className="flex flex-1">
        {/* Sidebar with scroll */}
        <div className="w-1/5 bg-white p-4 border-r border-gray-300 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>
          <NavBar setActivePage={setActivePage} />
        </div> 
        {/* Main Content with scroll */}
        <div className="w-2/3 p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>
          {renderContent()}
        </div>
        {/* PDF View with scroll */}
        <div className="w-2/3 p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>
          <ResumeView/>
        </div>
      </div>
    </div>
  );
}

export default Results;
