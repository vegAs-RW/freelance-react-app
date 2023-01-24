import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import {Loader} from '../../utils/style/Atom'

const SurveyContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
`

const QuestionTitle = styled.h2`
        text-decoration: underline;
        text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
        margin: 30px;
`

const LinkWrapper = styled.div`
        padding-top: 30px;
        & a {
            color: black;
        }
        & a:first-of-type {
            margin-right: 20px;
        }
`

const Survey = () => {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;

  const [surveyData, setSurveyData] = useState({});
  const [DataLoading, setDataLoading] = useState (false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchSurvey() {
        setDataLoading(true)
        try {
            const response = await fetch(`http://localhost:8000/survey`)
            const {surveyData} = await response.json()
            setSurveyData(surveyData)
        } catch(err) {
            console.log(err);
            setError(true)
        } finally {
            setDataLoading(false)
        }
    }
    fetchSurvey()
  }, []);


  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {DataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
      )}
      <LinkWrapper>
      <Link to={`/surveys/${prevQuestionNumber}`}>Précédent</Link>
      {surveyData[questionNumberInt + 1] ? (
        <Link to={`/surveys/${nextQuestionNumber}`}>Suivant</Link>
      ) : (
        <Link to="/results">Résultats</Link>
      )}
      </LinkWrapper>
    </SurveyContainer>
  );
};

export default Survey;
