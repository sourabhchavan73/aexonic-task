import React  from 'react';
import { connect } from 'react-redux';
import { createCart } from '../../redux/actions'
import veg from '../../images/veg.png';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Restoname from './Restoname';
import menus from '../../json/menus.json'
import Cart from './Cart';


const useStyles = makeStyles({
    cateIcons: {
        maxWidth: '1.5rem',
        height: 'auto'
    },

    gridCol: {
        paddingLeft: '15px',
        paddingRight: '15px',
        
    },

    menuCardCol:{
        borderTop: '1px solid #9ea0a7',
        padding: '2em 0',
    },

    menuTitle: {
        fontSize: '1.12em',
        color: '#2c2f3f',
        fontWeight: 500,
        marginBottom: '0.5rem'
    },

    menuPrice: {
        color: '#9ea0a7',
        fontSize: '1em',
    },

    menuDes: {
        color: '#9ea0a7',
        fontSize: '1em',
        marginTop: '0.5rem',
        fontWeight: 300,
    },

})


function Menu(props) {
    const classes = useStyles();

    const cartHandler = (meal) => {
        props.createCart(meal)
    }


    const MenuList = () => {
        return menus.map(menu => {
            return (
                <Grid key={menu.title}  container className={classes.menuCardCol}>
                    <Grid item lg={8}>
                        <img className={classes.cateIcons} src={veg} alt="veg" />
                        <h3 className={classes.menuTitle}>{menu.title}</h3>
                        <small className={classes.menuPrice}><strong>&#8377; {menu.price}</strong> </small>
                        <p className={classes.menuDes}>{menu.description}</p> 
                    </Grid>

                    <Grid item lg={4} >
                        <div>
                            <img className="img-fluid" src={menu.menuImage} alt="" />
                            <div className="quantity">
                                <span   className="quantity__minus"><span>-</span></span>
                                <input readOnly name="quantity" type="text" className="quantity__input" value={menu.qty} />
                                <span  className="quantity__plus"><span>+</span></span>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <button className="btn" onClick={()=>cartHandler(menu)}>Add Meal</button>
                    </Grid>
                </Grid>
            )
        })
    }


    return (
        <>
            <Restoname />
            <Container >
                <Grid container>
                    <Grid item lg={8} className={classes.gridCol}>
                        <div >
                            <MenuList />
                        </div>
                    </Grid>

                    <Grid item lg={4} className={classes.gridCol}>
                        <Cart />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}


export default connect(null, { createCart }) (Menu);
