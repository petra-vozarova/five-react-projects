import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalState = ({ children }) => {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });

  const [value, setValue] = useState("income");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  function handleFormSubmit(currentFormData) {
    if (!currentFormData.amount || !currentFormData.description) {
      return;
    }
    setAllTransactions([
      ...allTransactions,
      { ...currentFormData, id: Date.now() },
    ]);
  }

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
