import React from 'react';
import {useParams, Link} from 'react-router-dom';

const Survey = () => {
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt -1;
    const nextQuestionNumber = questionNumberInt + 1;
    return (
        <div>
            <h1>Questionnaire</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/surveys/${prevQuestionNumber}`}>Précédent</Link>
            {questionNumberInt === 10 ? (
                <Link to="/results">Résultats</Link>
            ) : (
                <Link to={`/surveys/${nextQuestionNumber}`}>Suivant</Link>
            )}
        </div>
    );
};

export default Survey;