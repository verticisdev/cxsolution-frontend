import * as React from "react";
import DashboardCard from "../shared/DashboardCard";
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableSortLabel,
    Typography,
    Box,
    Chip, TablePagination, Modal, Button
} from "@mui/material";
import {ChangeEvent, MouseEvent, useState} from "react";
import {visuallyHidden} from "@mui/utils";
import {customerResponseData, CustomerResponseType} from "../tables/tableData";
import CustomerModal from "./CustomerModal";
type Order = 'asc' | 'desc';

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof []) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

interface HeadCell {
    disablePadding: boolean;
    id: any;
    label: string;
    align?: 'center' | 'left' | 'right';
}

const headCells: HeadCell[] = [
    {
        id: 'send_date',
        disablePadding: false,
        label: 'Data e Hora de envio',
    },
    {
        id: 'send_method',
        disablePadding: false,
        label: 'Método de envio',
    },
    {
        id: 'send_to',
        disablePadding: false,
        label: 'Enviado para',
    },
    {
        id: 'answer',
        disablePadding: false,
        label: 'Resposta',
    },
    {
        id: 'view',
        disablePadding: false,
        label: 'Visualizado',
    },
    {
        id: 'score',
        disablePadding: false,
        label: 'Score',
    }
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }

    return 0;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} = props;
    const createSortHandler = (property: keyof []) => (event: MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => {
                    return (
                        <TableCell
                            key={headCell.id}
                            align={headCell.align ?? 'left'}
                            padding={headCell.disablePadding ? 'none' : 'normal'}
                            sortDirection={orderBy === headCell.id ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                <Typography variant="subtitle1" fontWeight="500">
                                    {headCell.label}
                                </Typography>
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>
                    )
                })}
            </TableRow>
        </TableHead>
    );
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }

        return a[1] - b[1];
    });

    return stabilizedThis.map((el) => el[0]);
}

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (a: { [key in Key]: number | string | boolean }, b: { [key in Key]: number | string | boolean }) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


const CustomerResponse = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [customerId, setCustomerId] = useState<number>(0);
    const [selected, setSelected] = useState<readonly string[]>([]);
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<any>('send_date');
    const [rows, setRows] = useState<CustomerResponseType[]>(customerResponseData);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [dense, setDense] = useState(false);
    const isSelected = (name: string) => selected.indexOf(name) !== -1;
    const handleRequestSort = (event: MouseEvent<unknown>, property: keyof []) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const handleClick = (event: MouseEvent<unknown>, id: number) => {
        console.log(id)
        setCustomerId(id);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    console.log(rows)
    return (
        <DashboardCard title="NPS Enviados">
            <Box mb={2} sx={{mb: 2}}>
                <TableContainer>
                    <Table
                        sx={{minWidth: 750}}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={() => {
                            }}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row: CustomerResponseType, index) => {
                                    const isItemSelected = isSelected(row.send_date);


                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.id)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell>
                                                <Typography variant="h6" fontWeight="600">
                                                    {row.send_date}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                                    {row.send_method}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                                    {row.send_to}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                                    {row.answer ? "Sim" : "Não"}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography color="textSecondary" variant="body1">
                                                    {row.view ? "Sim" : "Não"}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography color="textSecondary" variant="body1">
                                                    {row.score}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <CustomerModal id={customerId}/>
                </Modal>
            </Box>
        </DashboardCard>
    )
}

export default CustomerResponse;