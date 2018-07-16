import styled from 'styled-components';

import media from 'theme/media';

const themeFunction = ({ theme }) => {
  if (theme === 'danger') {
    return '#cc0000';
  } else if (theme === 'info') {
    return '#0a00cc';
  } else if (theme === 'success') {
    return '#1b9441';
  } else if (theme === 'warning') {
    return '#b7aa00';
  }
  return '#000';
};

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 10px;
  z-index: 100;
  left: 0;
  transform: translateY(${({ toaster }) => (toaster ? 0 : '100px')});
  transition: transform 0.15s ease-in;
  ${media.phone`
    bottom: 40px;
  `};
`;

const ToasterDiv = styled.div`
  border-radius: 3px;
  background: white;
  padding: 0px;
  font-size: 20px;
  border: solid 1px ${themeFunction};
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  width: 40%;
  ${media.phone`
    width: 90%;
  `};
`;

const Text = styled.p`
  font-family: 'Alegreya Sans', sans-serif;
  color: ${themeFunction};
  padding: 5px 10px;
  margin: 0;
`;

const ActionButton = styled.button`
  text-align: center;
  border-radius: 2px;
  background: ${themeFunction};
  border: none;
  padding: 2px 5px;
  width: 10px;
  overflow-x: hidden;
  color: ${themeFunction};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  &:hover {
    width: 70px;
    color: white;
  }
  ${media.phone`
    width: 90px;
    color: white;
  `};
`;

export { Wrapper, ToasterDiv, Text, ActionButton };
