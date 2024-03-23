import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        blogList,
        setBlogList,
        loading,
        setLoading,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
