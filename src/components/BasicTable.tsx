import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Container, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, Link } from "react-router-dom";

interface Column {
  id: "componentName" | "errorMessageCount";
  label: string;
  minWidth?: number;
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "componentName", label: "Component Name", minWidth: 170 },
  {
    id: "errorMessageCount",
    label: "Error Count",
    minWidth: 170,
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

interface TableRowData {
  componentName: string;
  errorMessageCount: number;
}

const rows: TableRowData[] = [
  { componentName: "9trn.mm.af.recalculate1", errorMessageCount: 20 },
  { componentName: "9trn.mm.af.recalculate2", errorMessageCount: 20 },
  { componentName: "9trn.mm.af.recalculate3", errorMessageCount: 20 },
  { componentName: "9trn.mm.af.recalculate4", errorMessageCount: 20 },
  { componentName: "9trn.mm.af.recalculate5", errorMessageCount: 20 },
  { componentName: "9trn.mm.af.recalculate6", errorMessageCount: 20 },
  { componentName: "9trn.mm.af.recalculate7", errorMessageCount: 20 },
  { componentName: "9trn.mm.af.recalculate8", errorMessageCount: 20 },
  { componentName: "9trn.mm.af.recalculate9", errorMessageCount: 20 },
  { componentName: "9trn.mm.af.recalculate10", errorMessageCount: 20 },
];

export default function BasicTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<TableRowData[]>(rows);
  const [showFilteredUsers, setShowFilteredUsers] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = () => {
    const filtered = rows.filter((comp) => comp?.componentName == searchQuery);
    setFilteredUsers(filtered);
    setShowFilteredUsers(true);
    setOpen(true);
    setSearchQuery("");
  };

  const handleRowClick = (componentName: string) => {
    navigate(`/details/${componentName}`);
  };

  return (
    <Container
      sx={{
        marginTop: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Paper elevation={3} sx={{ p: 3, width: "100%", maxWidth: "800px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <TextField
            label="Search by Account No."
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </div>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.componentName}
                      /*onClick={() => handleRowClick(row.componentName)}*/
                      style={{ cursor: "pointer" }}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return column.id === "componentName" ? (
                          <TableCell key={column.id}>
                            <Link
                              to={`/details/${value}`}
                              state={{ componentName: value }}
                            >
                              {value}
                            </Link>
                          </TableCell>
                        ) : (
                          <TableCell key={column.id}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
