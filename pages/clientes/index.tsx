import { useState, MouseEvent, ChangeEvent } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Chip,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { IconSearch } from '@tabler/icons-react';
import PageContainer from "../../src/components/container/PageContainer";
import { clientTableData, IClientTable } from "../../src/components/tables/tableData";
import BlankCard from "../../src/components/shared/BlankCard";
import Breadcrumb from "../../src/layouts/full/shared/breadcrumb/Breadcrumb";
import AddCustomer from "../../src/components/customers/AddCustomer";
import { useRouter } from "next/router";

type Order = 'asc' | 'desc';

interface EnhancedTableToolbarProps {
  handleSearch: ChangeEvent<HTMLInputElement> | any;
  search: string;
}

interface HeadCell {
  disablePadding: boolean;
  id: any;
  label: string;
  align?: 'center' | 'left' | 'right';
}

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof []) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
  ? (a, b) => descendingComparator(a, b, orderBy)
  : (a, b) => -descendingComparator(a, b, orderBy);
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
  
const headCells: HeadCell[] = [
  {
    id: 'name',
    disablePadding: false,
    label: 'Cliente',
  },
  {
    id: 'shots_quantity',
    disablePadding: false,
    label: 'Disparos',
  },
  {
    id: 'answers_quantity',
    disablePadding: false,
    label: 'Respostas',
  },
  {
    id: 'score',
    disablePadding: false,
    label: 'Score',
  },
  {
    id: 'classification',
    disablePadding: false,
    label: 'Classificação',
    align: 'center'
  }
];

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
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

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { handleSearch, search } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        justifyContent: { xs: 'flex-start', sm: 'space-between' },
        flexDirection: { xs: 'column', sm: 'row' }
      }}
    >
      <Box sx={{marginBottom: 1}}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconSearch size="1.1rem" />
              </InputAdornment>
            ),
          }}
          placeholder="Pesquisar"
          size="small"
          onChange={handleSearch}
          value={search}
        />
      </Box>
      <Box>
        <AddCustomer />
      </Box>
    </Toolbar>
  );
}

const ClientsList = () => {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<any>('Cliente');
    const [selected, setSelected] = useState<readonly string[]>([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const router = useRouter();
    
    // const rows: EnTableType[] = EnhancedTableData;

    // const getProducts: EnTableType[] = useSelector((state) => state.ecommerceReducer.products);
    const [rows, setRows] = useState<IClientTable[]>(clientTableData);
    const [search, setSearch] = useState('');
  
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filteredRows: IClientTable[] = clientTableData.filter((row) => {
          return row.name.toLowerCase().includes(event.target.value);
        });
        setSearch(event.target.value);
        setRows(filteredRows);
    };

    const handleRequestSort = (event: MouseEvent<unknown>, property: keyof []) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const handleClick = (event: MouseEvent<unknown>, slug: string) => {
    //   const selectedIndex = selected.indexOf(name);
    //   let newSelected: readonly string[] = [];

    //   if (selectedIndex === -1) {
    //     newSelected = newSelected.concat(selected, name);
    //   } else if (selectedIndex === 0) {
    //     newSelected = newSelected.concat(selected.slice(1));
    //   } else if (selectedIndex === selected.length - 1) {
    //     newSelected = newSelected.concat(selected.slice(0, -1));
    //   } else if (selectedIndex > 0) {
    //     newSelected = newSelected.concat(
    //       selected.slice(0, selectedIndex),
    //       selected.slice(selectedIndex + 1),
    //     );
    //   }

    //   setSelected(newSelected);
        router.push(`/customers/${slug}`)

    console.log('Click');
    };
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
      setDense(event.target.checked);
    };
  
    const isSelected = (name: string) => selected.indexOf(name) !== -1;
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
      <PageContainer>
        {/* breadcrumb */}
        <Breadcrumb title="Clientes" />
        <BlankCard>
          <Box mb={2} sx={{ mb: 2 }}>
            <EnhancedTableToolbar 
              search={search}
              handleSearch={(event: any) => handleSearch(event)}
            />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={() => {}}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: IClientTable, index) => {
                      const isItemSelected = isSelected(row.name);

                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row.slug)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                          sx={{cursor: 'pointer'}}
                        >
                          <TableCell>
                            <Typography variant="h6" fontWeight="600">
                              {row.name}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                              {row.shots_quantity}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                              {row.answers_quantity}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography color="textSecondary" variant="body1">
                              {row.score}
                            </Typography>
                          </TableCell>
                          <TableCell
                          align="center"
                          >
                            <Chip
                              color={
                                row.classification === 'Promotor'
                                  ? 'success'
                                  : row.classification === 'Neutro'
                                  ? 'warning'
                                  : row.classification === 'Detrator'
                                  ? 'error'
                                  : 'secondary'
                              }
                              sx={{
                                borderRadius: '30px',
                              }}
                              label={row.classification}
                            />
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
                      <TableCell colSpan={6} />
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
          </Box>
          {/* <Box p={2}>
            <FormControlLabel
              control={<CustomSwitch checked={dense} onChange={handleChangeDense} />}
              label="Dense padding"
            />
          </Box> */}
        </BlankCard>
      </PageContainer>
    );
  };
  
export default ClientsList;