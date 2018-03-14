export const giveBranch = (branch) => {
  switch (branch) {
    case 'it':
      return 'Information Techonology';
    case 'civil':
      return 'Civil Engineering';
    case 'env':
      return 'Environment Engineering';
    default:
      break;
  }
  return null;
};

export const getYearString = (admittedIn) => {
  const date = Date.now() - new Date(admittedIn);
  const year = date / 31556952000;
  const yearOfStudent = Math.floor(year) + 1;
  switch (yearOfStudent) {
    case 1:
      return '1st Year';
    case 2:
      return '2nd Year';
    case 3:
      return '3rd Year';
    case 4:
      return '4th Year';
    default:
      break;
  }
  return null;
};
