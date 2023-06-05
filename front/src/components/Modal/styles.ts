import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background-color: var(--color-gray-900);
    padding: 20px;
    box-shadow: 0 0 28px 0 rgba(0, 0, 0, 0.3);
    min-width: 240px;
    width: 95%;
    max-width: 560px;
  }
`;
