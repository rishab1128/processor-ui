import { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LeftDrawer from "../../components/LeftDrawer";


interface Detail {
  id: number;
  retryId: string;
}

const ErrorMsgPage: React.FC = () => {
//   const { componentName } = useParams<{ componentName: string }>();
  const [componentDetails, setComponentDetails] = useState<Detail[] | null>(
    null
  );
  const location = useLocation()
  const { componentName } = location.state;

  useEffect(() => {
    const fetchComponentDetails = async () => {
      const details: Detail[] = [
        { id: 1, retryId: "Retry1" },
        { id: 2, retryId: "Retry2" },
        { id: 3, retryId: "Retry3" },
      ];
      setComponentDetails(details);
    };

    fetchComponentDetails();
  }, [componentName]);

  if (!componentDetails) {
    return <div>Loading...</div>;
  }

  return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <LeftDrawer />
        <Paper elevation={3} style={{ width: "80%", padding: "20px" }}>
          <h2 style={{ textAlign: "center" }}>
            Error Messages for: {componentName}
          </h2>
          <TableContainer>
            <Table aria-label="error messages table">
              <TableHead>
                <TableRow>
                  <TableCell>Checkbox</TableCell>
                  <TableCell>Error Message</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {componentDetails.map((detail) => (
                  <TableRow key={detail.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{detail.retryId}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary">
                        Action
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
  );
};

export default ErrorMsgPage;
