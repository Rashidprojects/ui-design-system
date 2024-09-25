import React from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default App;
