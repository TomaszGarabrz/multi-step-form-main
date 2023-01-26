export const handleValidate = (
  nameValue,
  emailValue,
  numberValue,
  error,
  setError,
  setIsValidPageOne
) => {
  // POBRANIE ELEMENTÓW (ICH WARTOŚCI) I PRZYPISANIE ICH DO ZMIENNYCH
  const name = nameValue.current.value;
  const email = emailValue.current.value;
  const number = numberValue.current.value;

  if (name.length === 0 || email.length === 0 || number.length === 0) {
    console.log('któryś element jest pusty');

    // DODANIE BŁĘDU JEŚLI EMAIL JEST PUSTY

    if (name.length === 0) {
      if (error.input.includes('name')) {
        return;
      } else {
        error.input.push('name');
      }

      setError({
        ...error,
        errorMessage: 'Elo',
      });
    } else {
      let x = error.input.filter((x) => x !== 'name');
      setError({
        ...error,
        input: x,
        errorMessage: '',
      });
    }

    if (email.length === 0) {
      if (error.input.includes('email')) {
        return;
      } else {
        error.input.push('email');
      }

      setError({
        ...error,
        errorMessage: [...error.errorMessage, { id: 0, name: 'siema' }],
      });
    } else {
      let x = error.input.filter((x) => x !== 'email');
      setError({
        ...error,
        input: x,
        errorMessage: '',
      });
    }

    // if (email.length === 0) {
    //   setError({
    //     ...error,
    //     input: error.input.includes('email')
    //       ? error.input
    //       : error.input.push('email'),
    //   });
    // }
  } else if (!email.includes('@')) {
    console.log('brakuje małpki');
  } else if (name.length < 5) {
    console.log('imię musi być dłuże niż 5 znaków');
  } else if (number.length !== 9) {
    console.log('musi być dokładnie 9 znaków');
  } else {
    setIsValidPageOne({
      type: true,
      page: 1,
    });
    // setError({
    //   input: [],
    //   type: false,
    //   message: '',
    // });
  }
};
