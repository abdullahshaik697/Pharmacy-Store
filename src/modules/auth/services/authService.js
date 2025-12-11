const pharmacy_User = {
  email: "pharmacy@gmail.com",
  password: "123",
  name: "Aaish",
};

export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === pharmacy_User.email && password === pharmacy_User.password) {
        
        localStorage.setItem("user", JSON.stringify(pharmacy_User));
        resolve(pharmacy_User);
      } else {
        reject("Invalid email or password");
      }
    }, 1000);
  });
};

export const registerUser = (name, email, password) => {
  return new Promise((resolve) => {
    const newUser = { name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    resolve(newUser);
  });
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
