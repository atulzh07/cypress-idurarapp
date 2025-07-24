const loginPage = {
  url: "https://cloud.idurarapp.com/",
  selectors: {
    pageText: 'h3[class^="ant-typography"]',
    emailInput: 'input[type="email"]',
    passwordInput: 'input[type="password"]',
    rememberMeCheckbox: "normal_login_remember",
    submitButton: 'button[type="submit"]',
  },
};

export default loginPage;
