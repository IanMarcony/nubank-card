import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  color: #fff;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 1rem;
`;

export const InputArea = styled.div`
  display: flex;
  background-color: #ccc;
  width: 20%;
  height: 40px;
  padding: 2px 10px;
  border-radius: 5px;
`;

export const InputContent = styled.input`
  width: 100%;
  border: 0;
  background-color: #ccc;
`;

export const CardNubankArea = styled.div`
  width: 250px;
  height: 50vh;
  background-color: #9540e1;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  > img {
    width: 30%;
  }
`;

export const HeaderCard = styled.section`
  display: flex;

  align-items: flex-start;
  img {
    width: 30%;
  }
`;

export const BrandCard = styled.div`
  display: flex;
  #red-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ef474a;
  }
  #yellow-circle {
    position: relative;
    left: -15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f0a648;
  }
`;

export const NameCard = styled.span`
  max-width: 100%;
  color: #c3b4d2;
  margin: auto 0;
  margin-bottom: 45px;
  font-weight: 400;
`;
