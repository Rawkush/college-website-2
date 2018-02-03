import React from 'react';
import Modal from 'react-modal';

const LoginModal = (props) => (
  <Modal
    isOpen={!!props.loginModal}
    onRequestClose={props.closeLoginModal}
    contentLabel="Login or Regiseter Using..."
    contentTimeoutMS={200}
    className="modal"
    ariaHideApp={false}
  >
    <h3>Login or Regiter using ...</h3>
    <a href="http://localhost:3000/s/student/auth/google">Google</a>
    <a href="http://localhost:3000/s/student/auth/github">GitHub</a>
    <a href="http://localhost:3000/s/student/auth/linkedin">LinkedIn</a>
    <button onClick={props.closeLoginModal}>Close</button>
  </Modal>
);

export default LoginModal;
