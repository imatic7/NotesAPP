import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  display: block;
  background: #fff;
  box-sizing: border-box;
  padding: 50px;
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  display: block;
  width: 100%;
  height: 100px;
`;

export const ModalBody = styled.div`
  display: block;
  overflow-y: auto;
  width: 100%;
  height: 600px;
`;
