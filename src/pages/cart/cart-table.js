import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';

export default function CartTable(props) {
    
    //const { id:sno, image, title, description, quantity, price } = props.items;
    
    const {id, image, title, description, quantity, price, rating} = props;
    return (
        <>
            <TableBody>
                <TableCell>{id}</TableCell>
                <TableCell>
                    <Avatar variant="rounded" src={image} ></Avatar>
                </TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{quantity}</TableCell>
                <TableCell><Rating value={rating} /></TableCell>
            </TableBody>
        </>
    );
};