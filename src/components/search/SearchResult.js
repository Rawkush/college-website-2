import React from 'react';
import { A } from 'theme/Components';
import {
  Box,
  Image,
  Wrapper1,
  Wrapper2,
  Wrapper3,
  Name,
  Bio,
  RollNo,
  Year,
  Branch,
  LinksWrapper,
  StyledLink,
} from './Styles';
import { giveBranch, getYearString } from './Utils';

const Info = ({ name, bio, rollNo, admittedIn, branch }) => (
  <Wrapper2>
    <Name>{name}</Name>
    <RollNo>{rollNo}</RollNo>
    <Branch>{giveBranch(branch)}</Branch>
    <Year>{getYearString(admittedIn)}</Year>
    <Bio>{bio}</Bio>
  </Wrapper2>
);

const Links = ({ links }) => (
  <LinksWrapper>
    {links.map(({ provider, url, _id }) => (
      <A href={url} target="_blank" key={_id}>
        {provider}
      </A>
    ))}
  </LinksWrapper>
);

export default ({
  name,
  rollNo,
  admittedIn,
  branch,
  bio,
  photo = '',
  linkedProfiles,
  slugg,
} = {}) => (
  <Wrapper1>
    <Box>
      <Wrapper3>
        <StyledLink to={`/student/${slugg}`}>
          <Image src={photo.replace(/sz=50/, 'sz=500')} />
        </StyledLink>
        <Links links={linkedProfiles} />
      </Wrapper3>
      <StyledLink to={`/student/${slugg}`}>
        <Info
          name={name}
          bio={bio}
          rollNo={rollNo}
          admittedIn={admittedIn}
          branch={branch}
        />
      </StyledLink>
    </Box>
  </Wrapper1>
);
