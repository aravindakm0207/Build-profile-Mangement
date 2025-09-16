import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileDashboard  from './components/profileDashboard';
import  ProfilePage from './components/profileDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProfileDashboard />} />
      <Route path="/studentProfile/:name" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
