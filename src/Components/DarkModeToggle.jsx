import React, { useState } from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <lable>
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      Dark Mode
    </lable>
  );
};

export default DarkModeToggle;