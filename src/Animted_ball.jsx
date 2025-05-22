import React, { useContext } from 'react';
import styled from 'styled-components';
import { Appcontext } from './Context';

const Animted_ball = () => {
  const { darkmod } = useContext(Appcontext);

  return (
    <StyledWrapper $darkmod={darkmod}>
      <div className="loader">
        <div className="box1" />
        <div className="box2" />
        <div className="box3" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    width: 112px;
    height: 112px;
    position: relative;
  }

  .box1,
  .box2,
  .box3 {
    border: 16px solid ${props => (props.$darkmod ? '#ffffff' : '#000000')};
    box-sizing: border-box;
    position: absolute;
    display: block;
  }

  .box1 {
    width: 112px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
    animation: abox1 4s 1s forwards ease-in-out infinite;
  }

  .box2 {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
    animation: abox2 4s 1s forwards ease-in-out infinite;
  }

  .box3 {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
    animation: abox3 4s 1s forwards ease-in-out infinite;
  }

  @keyframes abox1 {
    0% { width: 112px; height: 48px; margin-top: 64px; margin-left: 0px; }
    12.5%, 25%, 37.5%, 50%, 62.5% { width: 48px; height: 48px; margin-top: 64px; margin-left: 0px; }
    75% { width: 48px; height: 112px; margin-top: 0px; margin-left: 0px; }
    87.5%, 100% { width: 48px; height: 48px; margin-top: 0px; margin-left: 0px; }
  }

  @keyframes abox2 {
    0%, 12.5%, 25%, 37.5% { width: 48px; height: 48px; margin-top: 0px; margin-left: 0px; }
    50% { width: 112px; height: 48px; margin-top: 0px; margin-left: 0px; }
    62.5%, 75%, 87.5%, 100% { width: 48px; height: 48px; margin-top: 0px; margin-left: 64px; }
  }

  @keyframes abox3 {
    0%, 12.5% { width: 48px; height: 48px; margin-top: 0px; margin-left: 64px; }
    25% { width: 48px; height: 112px; margin-top: 0px; margin-left: 64px; }
    37.5%, 50%, 62.5%, 75%, 87.5% { width: 48px; height: 48px; margin-top: 64px; margin-left: 64px; }
    100% { width: 112px; height: 48px; margin-top: 64px; margin-left: 0px; }
  }
`;

export default Animted_ball;
