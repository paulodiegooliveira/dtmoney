import { useState } from "react";
import Modal from "react-modal";
import { TransactionsProvider } from "./TransactionsContexts";

import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenModalNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseModalNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header
        onhandleOpenModalNewTrasactionModal={handleOpenModalNewTransactionModal}
      />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseModalNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
