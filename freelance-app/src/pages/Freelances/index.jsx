import React, { useEffect } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atom';
import { useFetch, useTheme } from '../../utils/hooks'


const CardsContainer= styled.div`
        display: grid;
        gap: 24px;
        grid-template-rows:350px 350px;
        grid-template-columns:repeat(2, 1fr);
        align-items: center;
        justify-items: center;
`

const PageTitle = styled.h1 `
    font-size: 30px;
    color: black;
    text-align: center;
    padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
        font-size: 20px;
        color: ${colors.secondary};
        font-weight: 300;
        text-align: center;
        padding-bottom: 30px;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Freelances = () => {
   const {theme} = useTheme()
   const {data, isLoading, error} = useFetch(
    `http://localhost:8000/freelances`
   )

    const freelancersList = data?.freelancersList

    if (error) {
        return <span>Oups il y'a un problème</span>
    }
   
    return (
        <div>
            <PageTitle theme={theme}>Trouvez votre freelance</PageTitle>
            <PageSubtitle theme={theme}>Chez Shinyy vous trouverez le profil qui correspond à vos besoins</PageSubtitle>
           
            {isLoading ? (
                <LoaderWrapper>
                <Loader theme={theme}/>
                </LoaderWrapper>
            ) : (
                 <CardsContainer>
                {freelancersList.map((profile, index) => (
                <Card key={`${profile.name}-${index}`}
                        label={profile.job}   
                        title={profile.name}
                        picture={profile.picture}
                        />
            ))}
            </CardsContainer>
            )} 
        </div>
    );
};

export default Freelances;