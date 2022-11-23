import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    132.6deg,
    rgba(71, 139, 214, 1) 23.3%,
    rgba(37, 216, 211, 1) 84.7%
  );
`;

export const Body = styled.main`
  width: 100%;
  height: 96vh;
  display: flex;
  justify-content: center;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: auto;
`;

export const ContentCard = styled.div`
  display: flex;
  padding: 0.7rem 1.5rem;
  width: 100%;
  height: 450px;
  border: 4px #111111 solid;
  border-radius: 15px;
  opacity: 35%;
  background-color: #282F44;
`;
