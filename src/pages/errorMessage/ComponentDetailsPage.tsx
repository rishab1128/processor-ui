import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

interface Detail {
  id: number;
  retryId: string;
}

const ComponentDetailsPage: React.FC = () => {
  const { componentName } = useParams<{ componentName: string }>();
  const [componentDetails, setComponentDetails] = useState<Detail[] | null>(
    null
  );

  // Simulating fetching component details based on componentName
  useEffect(() => {
    // Fetch component details based on componentName
    // For now, let's just simulate some static data
    const fetchComponentDetails = async () => {
      // Simulated data
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

  console.log(componentName);

  return (
    <div style={{ margin: "100px" }}>
      <h2>Component Details: {componentName}</h2>
      <TableContainer component={Paper}>
        <Table aria-label="component details table">
          <TableHead>
            <TableRow>
              <TableCell>Checkbox</TableCell>
              <TableCell>Retry ID</TableCell>
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
    </div>
  );
};

export default ComponentDetailsPage;
