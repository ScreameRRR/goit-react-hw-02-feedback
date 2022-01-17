import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: left;
`;

export const ButtonWrp = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const Button = styled.button`
  padding: 15px 36px;
  font-size: 16px;
  border-radius: 7px;
  border: none;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: -5px -5px 36px -5px rgba(166, 232, 238, 0.6) inset;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;
  }
`;