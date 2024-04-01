import Box from "@mui/material/Box";
import BasicTable from "../../components/BasicTable";
import LeftDrawer from "../../components/LeftDrawer";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

export default function TopicsPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
        <LeftDrawer/>
        <BasicTable/>
    </Box>
  );
}
