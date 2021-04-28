import {reviews} from '../../data/reviews';
import ReviewCard from './review-card';
import Grid from '@material-ui/core/Grid';

export default function ReviewListing(){

    return(
        <>
        <Grid container spacing={2}>
            {
                reviews.map(review =>(
                    <Grid item >
                        <ReviewCard {...review}/>
                    </Grid>
                    
                ))
            }
        </Grid>
            
        </>
    );
}