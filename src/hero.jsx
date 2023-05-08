import React, { useState, useEffect } from "react";
import MyModal from "./MyModel.jsx";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { styled } from "@mui/system";

const HeroContainer = styled("div")({
  backgroundColor: "#F3E8FF",
  padding: "1rem",
});

const StyledTableRow = styled(TableRow)({
  "&:hover": {
    backgroundColor: "#E9D8FD",
  },
});

const StyledTableCell = styled(TableCell)({
  padding: "0.5rem",
  fontWeight: "700 !important", // Increase the font weight to 700 (bold)
  color: "purple", // Set the text color to purple
  textAlign: "center", // Center the text
});

const StyledTableHeaderCell = styled(TableCell)(({ theme }) => ({
  padding: "0.5rem",
  fontWeight: "700 !important",
  color: "white", // Set the text color to white
  backgroundColor: "rgba(128,0,128,0.65)", // Set the background color to purple with some transparency
  textAlign: "center",
  borderRadius: "37px", // Add rounded corners
}));

export default function Hero({ transactions }) {
  const [showTableHeaders, setShowTableHeaders] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  console.log(
    "Before sorting:",
    transactions.map((tx) => tx.timestamp)
  );
  console.log(
    "After sorting:",
    transactions.map((tx) => tx.timestamp).sort((a, b) => b - a)
  );

  useEffect(() => {
    if (transactions.some((tx) => tx.value > 0)) {
      setShowTableHeaders(true);
    }
  }, [transactions]);

  return (
    <HeroContainer>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            {showTableHeaders && (
              <TableRow>
                <StyledTableHeaderCell>To</StyledTableHeaderCell>
                <StyledTableHeaderCell>Value</StyledTableHeaderCell>
              </TableRow>
            )}
          </TableHead>
          <TableBody>
            {transactions
              .filter((tx) => tx.value > 0)
              .sort((a, b) => b.timestamp - a.timestamp)
              .map((tx) => (
                <StyledTableRow key={tx.hash}>
                  <StyledTableCell>{tx.to}</StyledTableCell>
                  <StyledTableCell>
                    {(tx.value / 1000000000000000000).toFixed(8)}
                  </StyledTableCell>
                  <StyledTableCell>
                    <MyModal
                      isOpen={isModalOpen}
                      onRequestClose={toggleModal}
                      value={(tx.value / 1000000000000000000).toFixed(8)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </HeroContainer>
  );
}
