
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Campaigns from './Pages/Dashboards/Campaigns'; 

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/campaigns" element={<Campaigns />} /> 
  </Routes>
);

export default App;
