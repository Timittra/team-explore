import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Teams from '../Teams/Teams';
import './Home.css'
import BannerImage from '../../images/banner.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 3,
      display: 'flex',
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

const Home = () => {
    const [teams, setTeams] = useState([]);
    const classes = useStyles();

    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams));
    },[]);

    const bannerStyle = {
        backgroundImage: "url(" + BannerImage + ")"
    }

    return (
        <div className='teams-container'>
        <div style={bannerStyle} className='home-banner'>
            <h1>Team Explore</h1>
        </div> 
        <Container maxWidth='lg'>
            <Grid container className={classes.root} spacing={3}>
                {teams.map((team) => (
                    <Grid xs={12} sm={6} md={4} lg={4} key={team.idTeam} item>
                        <Teams team={team} />
                    </Grid>
                ))}
            </Grid>
        </Container>
        </div>
       
    );
};

export default Home;