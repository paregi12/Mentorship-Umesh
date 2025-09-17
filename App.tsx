import React, { useState } from "react";
import { OnboardingScreen } from "./components/OnboardingScreen";
import { AuthScreen } from "./components/AuthScreen";
import { HomeScreen } from "./components/HomeScreen";

export type Screen = "onboarding" | "auth" | "home";

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>("onboarding");

  const renderScreen = () => {
    switch (currentScreen) {
      case "onboarding":
        return (
          <OnboardingScreen
            onGetStarted={() => setCurrentScreen("auth")}
          />
        );
      case "auth":
        return (
          <AuthScreen
            onLogin={() => setCurrentScreen("home")}
          />
        );
      case "home":
        return <HomeScreen />;
      default:
        return (
          <OnboardingScreen
            onGetStarted={() => setCurrentScreen("auth")}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-lg">
        {renderScreen()}
      </div>
    </div>
  );
}