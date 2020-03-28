import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactName = styled.span`
  flex: 1 0 auto;
`;

export const ContactNumber = styled.span`
  margin-right: 50px;
`;

export const DeleteButton = styled.button`
  display: block;
  padding: 5px 10px;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  color: #fff;
  background-color: rgb(218, 1, 1);
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in;

  :hover {
    cursor: pointer;
    background-color: rgb(170, 0, 0);
  }
`;
