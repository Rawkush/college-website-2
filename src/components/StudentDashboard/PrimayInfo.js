import React from 'react';
import styled from 'styled-components';

import media from 'theme/media';

const Name = styled.h4`
  font-family: 'Noto Serif', serif;
  font-size: 25px;
  margin: 5px 0px;
`;

const Wrapper1 = styled.div`
  padding: 20px;
  ${media.phone`
    text-align: center;
    padding:  10px 20px;
  `};
`;

const RollNo = styled.p`
  font-family: 'Noto serif', serif;
`;

const Year = styled.p`
  font-family: 'Noto serif', serif;
`;

const Branch = styled.p`
  font-family: 'Noto serif', serif;
`;

const Bio = styled.p`
  font-family: 'Alegreya sans', serif;
  font-size: 18px;
  max-width: 500px;
`;

export default ({ name, rollNo, branch, admittedIn, bio, location } = {}) => {
  let showBranch;
  if (branch === 'it') {
    showBranch = 'Information Techonology';
  } else if (branch === 'env') {
    showBranch = 'Environment Engineering';
  } else if (branch === 'civil') {
    showBranch = 'Civil Engineering';
  }
  const date = Date.now() - new Date(admittedIn);
  const year = date / 31556952000;
  const getYearString = (y) => {
    const yearOfStudent = Math.floor(y) + 1;
    switch (yearOfStudent) {
      case 1:
        return '1st Year';
      case 2:
        return '2nd Year';
      case 3:
        return '3rd Year';
      case 4:
        return '4rt Year';
      default:
        break;
    }
    return null;
  };
  return (
    <div>
      <Wrapper1>
        <Name>{name}</Name>
        <RollNo>{rollNo}</RollNo>
        <Year>{getYearString(year)}</Year>
        <Branch>{showBranch}</Branch>
        <Bio>{bio}</Bio>
        <p>{location}</p>
      </Wrapper1>
    </div>
  );
};
