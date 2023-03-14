export function parseFullname(string) {
  const fullname = string.split(' ');
  const surname = fullname[0];
  const name = fullname[1];
  const middleName = fullname[1];

  return {
    surname, name, middleName
  }
}

