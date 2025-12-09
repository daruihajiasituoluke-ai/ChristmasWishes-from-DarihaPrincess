import React, { useState } from 'react';
import { Scene } from './components/Scene';
import { UI } from './components/UI';

const App: React.FC = () => {
  const [isAssembled, setIsAssembled] = useState(true);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden selection:bg-[#FFD700] selection:text-black">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Scene isAssembled={isAssembled} />
      </div>

      {/* UI Overlay */}
      <UI isAssembled={isAssembled} setIsAssembled={setIsAssembled} />
    </div>
  );
};

export default App;