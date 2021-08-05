import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    tableImg: {
        maxWidth: '75px',
        maxHidth: '100px',
        marginRight: '0.5rem'
    },

    deleteBtn: {
        cursor: 'pointer',
        color: 'red'
    },

    total: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px 0'
    },

    summaryCard: {
        padding: '15px',
        background: 'lightblue'
    },

    amountPaid:{
        borderTop: '0.5px solid #000',
        marginTop: '2.5rem'
    }
})

const Cartview = () => {
    const classes = useStyles();

    const [items, setItems] = useState([
        {
            title: 'peach top',
            id: 1,
            soldPerson: 'Peter parker',
            price: 400,
            img: 'https://allensolly.imgix.net/img/app/product/1/187359-524943.jpg',
            qty: 1
        },
        {
            title: 'Bag',
            id: 2,
            soldPerson: 'Peter parker',
            price: 70,
            img: 'https://cdn12.wildcraft.com/web-images/medium/styles/O10IAA9D6NR/1572085305280/1.JPG'
    
        },
        {
            title: 'Lether Bag',
            id: 3,
            soldPerson: 'Peter parker',
            price: 80,
            img: 'https://fossil.scene7.com/is/image/FossilPartners/ZB7957200_main?$sfcc_fos_hi-res$'
        },
        {
            title: 'Jeans',
            id: 4,
            soldPerson: 'Peter parker',
            price: 750,
            img: 'https://martinvalen.com/5975-large_default/men-s-light-blue-jeans-with-rips.jpg'
        },
        {
            title: 'Handbag',
            id: 5,
            soldPerson: 'Peter parker',
            price: 700,
            img: 'https://assets.ajio.com/medias/sys_master/root/20210403/C089/60687bf07cdb8c1f147696e2/-288Wx360H-461442449-green-MODEL.jpg'
        },
    ]) 

    const deleteItem = id => {
        setItems(items.filter(item => item.id !== id));
        console.log(items)
    }

    const total = () => {
        const count = items.map(item => item.price) 
        return count.reduce((a, b) => a + b, 0)
    }

    const amountPaid = () => {
        return total() + 100
    }

    const rendorTable = () => {
        return (
            <Grid item lg = {8}>
                <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell align="right">Color</TableCell>
                                <TableCell align="right">Size</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {items.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell component="th" scope="row">
                                        <div style = {{ display: 'flex'}}>
                                            <img className={classes.tableImg} src={item.img} alt="" />
                                            <div>
                                                <h4>{item.title}</h4>
                                                <small> sold by: {item.soldPerson} </small> <br />
                                                <small onClick={() => deleteItem(item.id)} className={classes.deleteBtn}>Remove Item</small>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell align="right">
                                        <select name="cars" id="cars" style={{ border: 0}}>
                                            <option value="red">red</option>
                                            <option value="Black">Black</option>
                                            <option value="White">White</option>
                                        </select>
                                    </TableCell>

                                    <TableCell align="right">
                                        <select  name="cars" id="cars" style={{ border: 0}}>
                                            <option value="Medium">Medium</option>
                                            <option value="Large">Large</option>
                                            <option value="Extra large">Extra large</option>
                                        </select>
                                    </TableCell>

                                    <TableCell align="right">
                                        <select style={{ border: 0}}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </TableCell>

                                    <TableCell align="right">
                                        $ 5000
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        )
    }

    return (
        <Container style = {{ marginTop: '5rem'}}>
            <Grid container style={{ justifyContent: 'space-between'}}>
                {items.length > 0 ? rendorTable() : "No items present in cart"}

                <Grid item lg={3}>
                    { items.length > 0 ?                     
                    <div className={classes.summaryCard}>
                        <h3>Summary</h3>
                        <div className = { classes.total}>
                            <small>SUBTOTAL</small>
                            <small>$ {total()}</small>
                        </div> 

                        <div className = { classes.total}>
                            <small>ESTIMATE TAX</small>
                            <small>$ 100</small>
                        </div> 

                        <div className = { classes.total}>
                            <small>SHIPPING CHARGES</small>
                            <small>FREE</small>
                        </div>  

                        <div className = {`${classes.total} ${classes.amountPaid}`}>
                            <small>Total</small>
                            <small>{amountPaid()}</small>
                        </div>
                    </div> : null}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cartview;
