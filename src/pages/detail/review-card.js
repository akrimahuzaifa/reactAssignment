import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
    media: {
        height: 342,
    },
    large: {
        width: "70px",
        height: "70px"
      },
});

export default function ReviewCard(props){
    const { username, date, rating, review } = props;
    const classes = useStyles();

    
    return(
        <>
            <Card>
                <CardHeader 
                    avatar={
                        <Avatar className={classes.large} aria-label='review'>
                            { username[0] }
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label='settings'>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={username}
                    subheader={
                        <div>
                            <Rating size='small' value={rating}/>
                            ({rating})
                            <br/>
                            {date} 
                        </div>
                    }
                />
                
                <CardContent>
                    
                    <Typography variant="body2">{review}</Typography>
                </CardContent>
            </Card>
        </>
    );
};