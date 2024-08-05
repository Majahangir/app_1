// src/App.tsx
import React from 'react';
import styled from 'styled-components';
import LoginForm from './loginform';

const App: React.FC = () => {
  return (
    <Container>
      <LeftPanel>
        <Logo>MyKlad</Logo>
        <Description>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec facilisis sem.</p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur elit donec nec facilisis sem.</li>
            <li>Ipsum dolor sit amet, consectetur adipiscing elitonec nec facilisis sem.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </Description>
      </LeftPanel>
      <RightPanel>
        <LoginForm />
      </RightPanel>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftPanel = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  max-width: 400px;
  p {
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      &:before {
        content: '✔️';
        margin-right: 10px;
      }
    }
  }
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
