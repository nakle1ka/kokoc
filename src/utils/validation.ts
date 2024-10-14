export const validateUsername = (username: string) => {
  const regex = /^[A-Za-zА-Яа-яЁё0-9_]{3,}$/;
  return regex.test(username) && username
    ? true
    : "Имя пользователя должно содержать не менее 3 символов и состоять только из букв и цифр";
};

export const validatePassword = (password: string) => {
  const minLength = 8;
  const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&.]).{8,}$/;

  if (!regex.test(password)) {
    return `Пароль должен быть не меньше 8 символов, включая латинские буквы, цифры и спец. символ (!@#$%&.)`;
  }

  return true;
};

export const validateBiography = (biography: string) => {
  return (
    biography.length <= 200 || "Биография не должна превышать 200 символов"
  );
};

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) && email
    ? true
    : "Введите корректный адрес электронной почты, например: user@example.com";
};
