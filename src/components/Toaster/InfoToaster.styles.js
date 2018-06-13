import styled from 'styled-components';

import media from 'theme/media';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 10px;
  z-index: 100;
  transform: translateY(${({ toaster }) => (toaster ? 0 : '100px')});
  transition: transform 0.3s ease-in;
  ${media.phone`
    bottom: 75px;
  `};
`;

const ToasterDiv = styled.div`
  border-radius: 3px;
  background: white;
  padding: 0px;
  font-size: 20px;
  border: solid 1px #cc0000;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  display: flex;
`;

const Text = styled.p`
  font-family: 'Alegreya Sans', sans-serif;
  color: #cc0000;
  padding: 5px 10px;
  margin: 0;
`;

const DismissButton = styled.button`
  text-align: center;
  border-radius: 2px;
  background: #cc0000;
  border: none;
  padding: 2px 5px;
  width: 10px;
  overflow-x: hidden;
  color: #cc0000;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  &:hover {
    width: 70px;
    color: white;
  }
`;

export { Wrapper, ToasterDiv, Text, DismissButton };
