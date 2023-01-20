import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <Link to='/'>Acceuil</Link>
            <Link to="/survey/42">Questionnaire</Link>
        </nav>
    );
};

export default Header;