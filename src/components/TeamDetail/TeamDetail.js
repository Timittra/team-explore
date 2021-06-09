/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Paper } from '@material-ui/core';
import './TeamDetail.css';
import { Col, Container, Row } from 'react-bootstrap';
import MaleImage from '../../images/male.png';
import FemaleImage from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFlag, faFutbol, faMars, faClock } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,  faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons' 

const TeamDetail = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState({});
    const { strGender, strTeam, strSport, strTeamBadge,
        intFormedYear, strCountry, strDescriptionEN,
        strDescriptionFR, strFacebook, strTwitter,
        strYoutube, strStadiumThumb } = team;

    const bannerStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.1) 100%),url(${strStadiumThumb})`,
    }

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]));
    }, [teamId]);

    return (
        <div style={{backgroundColor: 'black'}}>
            <Paper
                className='banner'
                elevation={3}
                style={bannerStyle}>
                <img src={strTeamBadge} className='logo' alt="logo" />
            </Paper>
            <Container>
                <Row className='team-detail team-info'>
                    <Col md={7} sm={12}>
                        <h3>{strTeam}</h3>
                        <h6><FontAwesomeIcon className='team-info-icons' icon={faClock} /> Founded: {intFormedYear}</h6>
                        <h6><FontAwesomeIcon className='team-info-icons' icon={faFlag} /> Country: {strCountry}</h6>
                        <h6><FontAwesomeIcon className='team-info-icons' icon={faFutbol} /> Sport type: {strSport}</h6>
                        <h6><FontAwesomeIcon className='team-info-icons' icon={faMars} /> Gender: {strGender}</h6>
                    </Col>
                    <Col md={5} sm={12} className='team-images'>
                        {
                           (strGender === 'Male')? <img src={MaleImage} alt="male"/> : <img src={FemaleImage} alt='female'/> 
                        }
                    </Col>
                </Row>
                <Row className='team-detail'>
                    <Col>
                         {strDescriptionEN}
                    </Col>
                </Row>
                <Row className='team-detail'>
                    <Col>
                        {strDescriptionFR}
                    </Col>
                </Row>
                <Row className='team-detail'>
                    <Col>
                        <div className='social-links'>
                            <span><a href={`//` + strTwitter} target='_blank' rel='noreferrer noopener'><FontAwesomeIcon className="twitter" icon={faTwitter} /></a></span>
                            <span><a href={`//` + strFacebook} target='_blank' rel='noreferrer noopener'><FontAwesomeIcon className="facebook" icon={faFacebook} /></a></span>
                            <span><a href={`//` + strYoutube} target='_blank' rel='noreferrer noopener'><FontAwesomeIcon className="youTube" icon={faYoutube} /></a></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TeamDetail;