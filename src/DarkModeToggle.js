import React from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className='fixed top-4 right-4'>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <p className={darkMode ? 'text-white' : 'text-white-300'}>{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
    </div>
  );
};

export default DarkModeToggle;
