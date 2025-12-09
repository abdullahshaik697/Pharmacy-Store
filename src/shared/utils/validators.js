export const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  
  export const isEmpty = (value) => {
    return value.trim() === "";
  };
  