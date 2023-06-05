import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  > main {
    height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

export const Column01 = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  > h3 {
    font-size: 2rem;
    width: 350px;
    text-align: center;
  }

  > section {
    display: flex;
    min-height: 100px;
    max-height: 400px;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }
`;

export const Column02 = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  h2 {
    color: var(--color-blue-700);
    font-weight: 600;
    font-size: 3rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    > label {
      margin-top: 20px;
      font-size: 1.8rem;
      font-weight: 400;
      color: var(--color-gray-200);
      margin-left: 5%;
    }
    > input {
      padding: 0px 16px;
      height: 4rem;

      background-color: var(--color-gray-300);
      border: 1.2px solid var(--color-gray-300);
      border-radius: 4px;

      font-size: 1.6rem;
      font-weight: 400;
      color: var(--color-gray-900);
    }

    > input::placeholder {
      color: var(--color-gray-600);
    }

    > input:focus {
      outline: 1.2px solid var(--color-blue-700);
      background-color: var(--color-white);
    }

    > small {
      color: var(--color-blue-700);
    }

    > button {
      margin-top: 20px;
      padding: 0px 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.6rem;
      font-weight: 600;
      color: var(--color-gray-900);
      background: var(--color-blue-700);

      transition: 0.5s ease;
    }

    button:hover {
      transition: 0.5s ease;
      color: var(--color-blue-700);
      background: var(--color-gray-900);
      border: 2px solid var(--color-blue-700);
    }
  }
  .loginSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    h3 {
      font-weight: 500;
    }

    a {
      text-decoration: none;
      color: var(--color-blue-700);
      font-weight: 200;
      transition: 0.5s ease;
    }

    a:hover {
      color: var(--color-white);
      transition: 0.5s ease;
    }
  }
`;
