import { categories } from '../../data/category';
import { FormControlLabel, Checkbox, Card, CardContent, Typography } from '@material-ui/core';
import CategoryIcon from '@material-ui/icons/Category';

function FormControl(props) {
    const { category, isChecked, onChangeCategory } = props
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={isChecked}
                    //onChange={event => onChangeCategory(category, event.target.checked)}
                />
            }
            label={category}
        />
    );
}

export default function CategoryFilter(props) {
    const { selectedItems, onChangeCategory } = props;

    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h6">
                        <CategoryIcon color='primary' />
                        Categories<hr/>
                    </Typography>
                    {categories.map(x =>
                        <div>
                            <FormControl
                                key={x}
                                category={x}
                                isChecked={selectedItems.includes(x)}
                                //onChangeCategory={onChangeCategory}
                            />
                            <br />
                        </div>
                    )}
                </CardContent>
            </Card>


        </>
    );
}