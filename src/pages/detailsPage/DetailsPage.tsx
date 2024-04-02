import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import {
  DataGrid,
  GridToolbar,
  GridRowId,
  GridCellParams,
} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockComponentDetailsInfo as events } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const DetailsPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedRow, setSelectedRow] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState<GridRowId[]>([]);
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(false);
  const [isReprocessEnabled, setIsReprocessEnabled] = useState(false);

  const handleViewMessage = (message: string) => {
    setSelectedRow(message);
    setOpen(true);
    setIsDeleteEnabled(true);
    setIsReprocessEnabled(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log("Deleting selected row...");
    // Implement deletion logic here
  };

  const handleReprocess = () => {
    console.log("Reprocessing selected row...");
    // Implement reprocessing logic here
  };

  const handleSelectionChange = (selectionModel: GridRowId[]) => {
    setSelectedRows(selectionModel);
    // Enable buttons if any row is selected
    setIsDeleteEnabled(selectionModel.length > 0);
    setIsReprocessEnabled(selectionModel.length > 0);
  };

  const columns = [
    { field: "id", headerName: "Retry Event ID", flex: 1 },
    {
      field: "topicName",
      headerName: "Topic Name",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    { field: "url", headerName: "URL", flex: 1 },
    { field: "eventReceivedTime", headerName: "Event Rcvd Time", flex: 1 },
    { field: "failedReason", headerName: "Failed Reason", flex: 1 },
    {
      field: "viewMessage",
      headerName: "View Error Message",
      flex: 1,
      renderCell: (params: GridCellParams) => (
        <VisibilityIcon
          sx={{
            color: colors.blueAccent[700],
            cursor: "pointer",
          }}
          fontSize="medium"
          onClick={() => handleViewMessage(params.row.errorMessage)}
        />
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="EVENTS" subtitle="List of All Events" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            fontSize: "16px",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            fontSize: "16px",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          mb="10px"
        >
          <Button
            variant="contained"
            color="error"
            disabled={!isDeleteEnabled}
            onClick={handleDelete}
            sx={{ mr: "10px" }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="success"
            disabled={!isReprocessEnabled}
            onClick={handleReprocess}
            sx={{ mr: "10px" }}
          >
            Reprocess
          </Button>
        </Box>
        <DataGrid
          checkboxSelection
          rows={events}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onSelectionModelChange={handleSelectionChange}
          selectionModel={selectedRows}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-modal-title">Error Message</h2>
          <p id="modal-modal-description">{selectedRow}</p>
        </Box>
      </Modal>
    </Box>
  );
};

export default DetailsPage;
