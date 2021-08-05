import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
    mainContainer: {
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
    },

    restoInfo:{
        fontSize: '1em',
        position: 'relative',
        top: '2px'
    },
    
    restoCard: {
        background: 'rgb(14, 34, 61)',
        borderRadius: '4px',
        color: '#fff',
        padding: '2em 3em'
    }
})

function Restoname (props) {
    const classes = useStyles();
    return (
        <Container className={classes.mainContainer} >
            <Grid container>
                <Grid item xs={12}>
                    <div className = {classes.restoCard}>
                        <h1>McDonald's</h1>
                        <p><StarIcon className={classes.restoInfo} /> 4.3 <span style={{ margin : '0 0.5em'}}> | </span> <span>35 Min</span> <span style={{ margin : '0 0.5em'}}> | </span> 400 for two </p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Restoname;
