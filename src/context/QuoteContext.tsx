import React, { createContext, useContext, useState } from 'react';

interface QuoteContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <QuoteContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuoteModal = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteProvider');
  }
  return context;
};
