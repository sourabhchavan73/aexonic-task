import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCartItems } from '../../redux/actions';
import veg from '../../images/veg.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cateIcons: {
        maxWidth: '1.5rem',
        height: 'auto'
    },

    cartContainer:{
        display: 'flex'
    },

    qty:{
        justifyContent: 'flex-start',
        margin: '1rem 0'
    },

    itemDes: {
        color: '#9ea0a7',
        fontSize: '1em',
        fontWeight: 300,
        marginLeft: '1rem'
    },

    cartMainContainer:{
        padding: '0.5em 0 1.8em 0'
    },

    totalContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1.5em 15px 0 0'
    }
})



const Cart = ( props ) => {
    useEffect(() => {
        props.fetchCartItems();
    }, [])

    const classes = useStyles();

    const rendorCart = () => {
        return props.cartItems.map(cartItem => {
            return (
                <div key={cartItem.id} className={classes.cartMainContainer}>
                    <div style={{marginTop: '1.5rem'}} className={classes.cartContainer}>
                        <div>
                            <img className={classes.cateIcons} src={veg} alt="veg" />
                        </div>
                        <p className={ classes.itemDes}>{cartItem.title}</p>
                    </div>

                    <div className={` quantity ${classes.qty}`}>
                        <span  className="quantity__minus"><span>-</span></span>
                        <input readOnly name="quantity" type="text" className="quantity__input" value={1} />
                        <span  className="quantity__plus"><span>+</span></span>
                    </div>

                    <strong>&#8377; {cartItem.price}</strong>
                </div>
                
            )
        })
    }

    const cartCount = () => {
        return props.cartItems.length;
    }

    const checoutAmount = () => {
        const amt = props.cartItems.map(item => item.price);
        const total = amt.reduce((a, b) => a + b, 0)
        return total;
    }

    return (
        <>
            <h2>Cart</h2>
            <small>Total Items: {cartCount()}</small>
            <div style={{ maxHeight: '28em', overflow: 'auto'}}>
                {rendorCart()}
                {checoutAmount()}
            </div>

            <div className={classes.totalContainer}>
                <div>
                    <h4>Subtotal</h4>
                    <small>Extra charges may apply</small>
                </div>

                <div>
                    &#8377; {checoutAmount()}
                </div>
            </div>
            <Link to="/cart">
                <button style={{ marginTop: '1.5rem'}} className="btn">Checkout</button>
            </Link>
        </>

    )
}

const mapStateToProps = ( state ) => {
    return { cartItems: Object.values(state.cart)}
}

export default connect(mapStateToProps, 
    {
        fetchCartItems: fetchCartItems
    })(Cart);

