
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TestUserContextType {
  isTestUser: boolean;
  toggleTestUser: () => void;
}

const TestUserContext = createContext<TestUserContextType | undefined>(undefined);

export const TestUserProvider = ({ children }: { children: ReactNode }) => {
  const [isTestUser, setIsTestUser] = useState(false);
  
  const toggleTestUser = () => {
    setIsTestUser(prev => !prev);
  };

  return (
    <TestUserContext.Provider value={{ isTestUser, toggleTestUser }}>
      {children}
    </TestUserContext.Provider>
  );
};

export const useTestUser = (): TestUserContextType => {
  const context = useContext(TestUserContext);
  if (context === undefined) {
    throw new Error("useTestUser must be used within a TestUserProvider");
  }
  return context;
};
