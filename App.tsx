import React, { useState, useCallback } from 'react';
import { Experience } from './components/Experience';
import { UI } from './components/UI';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const addImageRef = useCallback((file: File) => {
    // This will be replaced by the callback from Experience
    console.log("Image handler not ready", file.name);
  }, []);
  
  // We use a mutable ref for the callback function so UI can call it
  // But since the UI needs to pass it down, we actually need to lift the handler up or use a ref wrapper.
  // A cleaner way for this specific one-way flow:
  const [handleImageUpload, setHandleImageUpload] = useState<(file: File) => void>(() => () => {});

  const handleLoaded = useCallback(() => {
    // Artificial delay for smooth transition
    setTimeout(() => setLoading(false), 800);
  }, []);

  const onUpload = (files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach((file) => {
      handleImageUpload(file);
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-serif">
      <Experience 
        onLoaded={handleLoaded} 
        onImageAdd={(callback) => setHandleImageUpload(() => callback)} 
      />
      <UI isLoading={loading} onUpload={onUpload} />
    </div>
  );
};

export default App;