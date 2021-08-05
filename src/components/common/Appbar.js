import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
    leftContainer: {
        marginLeft: 'auto'
    },

    list:{
        paddingLeft: 0,
        marginBottom: 0,
        listStyle: 'none',
        listStylePosition: 'initial',
        listStyleImage: 'initial',
        listStyleType: 'none',
    },

    appbar:{
        background: 'rgb(14, 34, 61)'
    },

    brandName: {
        color: '#fff',
    }
})

function Appbar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.appbar} position="static" elevation={0}>
                <Container maxWidth="lg">
                    <Toolbar style={{ padding: 0}}>
                        <Link className={classes.brandName} to = "/">FoodApp</Link>

                        <div className={classes.leftContainer}>
                            <ul className={classes.list}>
                                <Link className={classes.brandName} to="/cart"><li>Cart</li></Link>
                            </ul>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Appbar
