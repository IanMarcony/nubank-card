import React, { useState, useCallback } from "react";

import simCardIcon from "../../assets/images/sim-card.svg";
import nubankIcon from "../../assets/images/nubank_logo.svg";

import {
  Container,
  InputArea,
  InputContent,
  CardNubankArea,
  BrandCard,
  HeaderCard,
  NameCard,
} from "./styles";

function Home() {
  const [nameUser, setNameUser] = useState("Default");

  const changeName = useCallback(({ target }) => {
    setNameUser(target.value);
  }, []);

  return (
    <Container>
      <InputArea>
        <InputContent
          onChange={changeName}
          defaultValue={nameUser}
          value={nameUser}
          maxLength={21}
        />
      </InputArea>
      <CardNubankArea>
        <HeaderCard>
          <BrandCard>
            <div id="red-circle"></div>
            <div id="yellow-circle"></div>
          </BrandCard>
          <img src={simCardIcon} alt="sim-card" />
        </HeaderCard>
        <NameCard>{nameUser}</NameCard>
        <img src={nubankIcon} alt="Nubank" />
      </CardNubankArea>
    </Container>
  );
}

export default Home;
