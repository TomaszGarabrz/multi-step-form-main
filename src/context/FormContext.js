import { useContext, createContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormContextProvider = ({ children }) => {
  const initialValue = {
    name: '',
    email: '',
    number: '',
    package: [],
    plan: {},
  };
  const initialValidPageValue = { type: false, page: 0 };
  const [submitForm, setSubmitForm] = useState(false);
  const [showSlide, setShowSlide] = useState(0);
  const [validPage, setValidPage] = useState(initialValidPageValue);
  const [formValues, setFormValues] = useState(initialValue);

  const [isChecked, setIsChecked] = useState(false);
  const [choosedItem, setChoosedItem] = useState([]);

  const [isValidPageTwo, setIsValidPageTwo] = useState({
    type: false,
    page: 1, // tylko jeśli będzie odpowiednik to innego slide można użyć
  });

  const [isValidPageTree, setIsValidPageTree] = useState({
    type: false,
    page: 2, // tylko jeśli będzie odpowiednik to innego slide można użyć
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    e.preventDefault();

    // DANE POWINNY BYĆ ZAPISYWANE W MOMENCIE KIEDY KK NA INNY ELEMENT
  };

  return (
    <FormContext.Provider
      value={{
        setSubmitForm,
        submitForm,
        showSlide,
        setShowSlide,
        isChecked,
        setIsChecked,
        handleForm,
        formValues,
        setFormValues,
        isValidPageTwo,
        setIsValidPageTwo,
        isValidPageTree,
        setIsValidPageTree,
        setValidPage,
        validPage,
        choosedItem,
        setChoosedItem,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
