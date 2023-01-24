import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atom';


const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
    {
        name: 'Kevin Smith',
        jobTitle: 'Développeur Front',
        picture: DefaultPicture,
    },
]

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
    const [freelancersList, setFreelancersList] = useState([]);
  const [DataLoading, setDataLoading] = useState (false)
  const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchFreelance() {
            setDataLoading(true)
            try {
                const response = await fetch(`http://localhost:8000/freelances`)
                const {freelancersList} = await response.json();
                setFreelancersList(freelancersList)
            } catch(err) {
                console.log(err);
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        fetchFreelance();
    }, [])

    if (error) {
        return <span>Oups il y'a un problème</span>
    }
   
    return (
        <div>
            <PageTitle>Trouvez votre freelance</PageTitle>
            <PageSubtitle>Chez Shinyy vous trouverez le profil qui correspond à vos besoins</PageSubtitle>
           
            {DataLoading ? (
                <LoaderWrapper>
                <Loader/>
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