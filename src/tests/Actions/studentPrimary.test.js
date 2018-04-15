import { addstudent } from '../../actions/studentPrimary';

test('testing data recived from form to add students at just dispacting store', () => {
  const student = {
    name: 'dhruv',
    rollNo: '41720703116',
    email: 'dhruvkaran24@gmail.com',
    location: 'delhi',
    gender: 'M',
    admittedIn: 2016,
    bio: "i ma very nice guy with a very hard decidation",
    branch: 'It',
    dateOfBirth: "24/03/1998",
    // linkedProfiles: [
    //   google:{
    //       name: 'google',
    //       url:'',
    //   }
    // ]
  };
  const fakestudent = addstudent(student);
  expect(fakestudent).toEqual({
    type: 'ADD_STUDENT',
    student: { ...student },
  });

})
