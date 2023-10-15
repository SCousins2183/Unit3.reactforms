import React, { useState } from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      <span className="slider"></span>
    </label>
  );
};

export default DarkModeToggle;