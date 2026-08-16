import React, { createContext, useContext, useState } from 'react';

export interface QuoteModalData {
  product?: string;
  message?: string;
  category?: string;
}

interface QuoteContextType {
  isModalOpen: boolean;
  modalData: QuoteModalData | null;
  openModal: (data?: QuoteModalData) => void;
  closeModal: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<QuoteModalData | null>(null);

  const openModal = (data?: QuoteModalData) => {
    setModalData(data || null);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <QuoteContext.Provider value={{ isModalOpen, modalData, openModal, closeModal }}>
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
