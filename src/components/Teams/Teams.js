import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './Teams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Teams = (props) => {
    const {strTeam, strTeamBadge, idTeam, strSport} = props.team;
    const history = useHistory();

    const handleClick = (teamId) =>{
        const url = `/team/${teamId}`;
        history.push(url);
    }


    return (
    <Card className='team-card' style={{ width: '12rem' }}>
            <Card.Img variant="top" src={strTeamBadge} />
            <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text>Sports type: {strSport}</Card.Text>
                <Button
                    variant="outline-success"
                    onClick={() => handleClick(idTeam)}
                >Explore <FontAwesomeIcon className='team-info-icons' icon={faArrowRight} /></Button>
            </Card.Body>
        </Card>
    );
};

export default Teams;