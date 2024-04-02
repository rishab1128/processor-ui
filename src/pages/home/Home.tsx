import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox"; // Import StatBox from its correct location
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import React from "react";
import { DataGrid, GridRowParams,GridCellParams } from "@mui/x-data-grid";
import { mockErrorCountInfo as events } from "../../data/mockData";
import { useNavigate } from "react-router-dom";
import { postComponentName } from "../../services/generalService";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const columns = [
    { field: "componentName", headerName: "Component Name", flex: 1, renderCell: (params: GridCellParams) => {
        const { value } = params;
        return (
          <Link
            to={`/details/${value}`}
            style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
          >
            {value}
          </Link>
        );
      }, },
    { field: "errorCount", headerName: "Error Count", flex: 1 },
  ];

  const handleRowClick = async (params: GridRowParams) => {
    const { componentName } = params.row;
    try {
      const data = await postComponentName(componentName);
      // Navigate to the details page
    //   navigate(`/details/${componentName}`);
    } catch (error) {
      console.error("Error:", error);
      // Handle error if needed
    }
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        {/* <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box> */}
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }} // Use sx prop for styling
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }} // Use sx prop for styling
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }} // Use sx prop for styling
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }} // Use sx prop for styling
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
      {/* ROW 2 */}
      <Box m="20px">
        <Header
          title="All Components"
          subtitle="Error Count of respective components"
        />
        <Box
          m="40px 0 0 0"
          height="55vh"
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
          <DataGrid
            rows={events}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            onRowClick={handleRowClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
