import CartTable from './cart-table';
import { cart } from '../../data/cart';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';

export default function CartRow() {

    return (
        <>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell>ID</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Ratings</TableCell>
                </TableHead>
                {/* {
                    cart.map(item => <CartTable items={item} />)
                } */}
                {
                    cart.map(item => <CartTable {...item} />)
                }
            </Table>
        </TableContainer>
        </>
    );
}