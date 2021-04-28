import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
    media: {
        height: 342,
    },
});

export function ProductCard(props) {
    const { image, title, description, price } = props.product
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       Rs. {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button startIcon={<FavoriteIcon/>} size="small" color="primary">
                    Add to Favorite
                </Button>
                <Button startIcon={<ShoppingCartIcon/>} size="small" color="primary">
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}