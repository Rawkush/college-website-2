import React from 'react';

export default ({ name, rollNo, branch, year, bio, location }) => {
  let showBranch;
  if (branch === 'it') {
    showBranch = 'Information Techonology';
  } else if (branch === 'env') {
    showBranch = 'Environment Engineering';
  } else if (branch === 'civil') {
    showBranch = 'Civil Engineering';
  }
  return (
    <div>
      <h4>{name}</h4>
      <p>{rollNo}</p>
      <p>{showBranch}</p>
      <p>{year}</p>
      <p>{bio}</p>
      <p>{location}</p>
    </div>
  );
};
