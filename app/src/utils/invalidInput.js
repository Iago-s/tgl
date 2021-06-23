export const isEmpty = (value) => value === '';

export const isMinChar = (value, char) => value.length < char;

export const isInvalidMail = (email) => {
  const regex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  if (email === '' || !regex.test(email)) {
    return true;
  }

  return false;
};
