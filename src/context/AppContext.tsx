import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Service, Expert, Quote, PricingCriteria } from '@/types';

interface AppState {
  selectedService: Service | null;
  selectedExpert: Expert | null;
  pricingCriteria: PricingCriteria;
  currentQuote: Quote | null;
}

interface AppContextType extends AppState {
  setSelectedService: (service: Service | null) => void;
  setSelectedExpert: (expert: Expert | null) => void;
  setPricingCriteria: (criteria: PricingCriteria) => void;
  setCurrentQuote: (quote: Quote | null) => void;
  resetState: () => void;
}

const defaultPricingCriteria: PricingCriteria = {
  urgency: 'standard',
  complexity: 'standard',
  quantity: 1,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [pricingCriteria, setPricingCriteria] = useState<PricingCriteria>(defaultPricingCriteria);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  const resetState = () => {
    setSelectedService(null);
    setSelectedExpert(null);
    setPricingCriteria(defaultPricingCriteria);
    setCurrentQuote(null);
  };

  return (
    <AppContext.Provider
      value={{
        selectedService,
        selectedExpert,
        pricingCriteria,
        currentQuote,
        setSelectedService,
        setSelectedExpert,
        setPricingCriteria,
        setCurrentQuote,
        resetState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
