import React from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { StyledLink } from '../../utils/style/Atom';
import HomeIllustration from "../../assets/home-illustration.svg";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeContainer = styled.div`
  margin: 30px;
  background-color: ${colors.background};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex:1;
  ${StyledLink} {
    max-width: 250px;
  }
`;

const StyledTitle = styled.h2`
        padding-bottom: 30px;
        max-width:280px;
        line-height: 50px;
`

const Illustration = styled.img`
        flex:1;
`

const Home = () => {
  return (
    <HomeWrapper>
    <HomeContainer>
    <LeftCol>
        <StyledTitle>Repérez vos besoins, on s'occupe de vous mettre en contact avec les meilleurs talents</StyledTitle>
        <StyledLink to="/survey/1" $isFullLink>
            Faire le test
        </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
    </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
