export default (array) =>
  array.map((elem) => {
    switch (elem) {
      case 'null':
        return '';
      case 'student':
        return 'Student';
      case 'teacher':
        return 'Teacher';
      case 'googleForm':
        return 'Google Forms';
      case 'pdf':
        return 'PDF';
      case 'external':
        return 'External Link';
      case 'iyear':
        return 'I Year';
      case 'iiyear':
        return 'II Year';
      case 'iiiyear':
        return 'III Year';
      case 'ivyear':
        return 'IV Year';
      case 'it':
        return 'I.T.';
      case 'env':
        return 'Environment';
      case 'civil':
        return 'Civil';
      default:
        return '';
    }
  });
