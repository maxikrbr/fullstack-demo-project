import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;


  section {
    text-align: center;
    border-top: 2px solid var(--color-blue-700);

    h2 {
      margin-top: 2rem;
      margin-bottom: 4rem;
    }
  }
`;

export const StyledHeader = styled.header`
  background-color: var(--color-blue-900);
  border-radius: 0px 0px 24px 24px;
  padding-bottom: 20px;
  padding-top: 8px;
  section {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      img {
        height: 60px;
      }
    }
  }

  .headerButtons {
    display: flex;
    gap: 1rem;

    button {
      padding: 10px 40px;
      border-radius: 8px;
      border: 1px solid var(--color-white);
      background-color: var(--color-white);

      font-size: 2rem;
      color: var(--color-gray-900);

      transition: 0.5s ease;
    }

    button:hover {
      transition: 0.5s ease;
      border: 1px solid var(--color-gray-700);
      scale: 1.1;
    }
  }
`;

export const ContactList = styled.ul`
  margin: 0 auto;
  margin-top: 12px;
  width: 110%;
  min-height: 50%;
  max-height: 70%;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 12px;
`;
