import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardPreview from "./components/CardPreview";
import ExportManager from "./components/ExportManager";
import EnhancedEffects from "./components/EnhancedEffects";
import LoadingScreen from "./components/LoadingScreen";
import { NotificationProvider } from "./components/NotificationSystem";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <NotificationProvider>
      <div className="App" dir="rtl">
        <BrowserRouter>
          <EnhancedEffects />
          <Routes>
            <Route path="/" element={<CardPreview />} />
            <Route path="/export" element={<ExportManager />} />
          </Routes>
        </BrowserRouter>
      </div>
    </NotificationProvider>
  );
}

export default App;