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

import "./Hero.css";

export default function Hero({ transactions }) {
  const [showTableHeaders, setShowTableHeaders] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (transactions.some((tx) => tx.value > 0)) {
      setShowTableHeaders(true);
    }
  }, [transactions]);

  return (
    <div className="hero">
      <TableContainer component={Paper}>
        <Table className="hero__table" aria-label="simple table">
          <TableHead>
            {showTableHeaders && (
              <TableRow>
                <TableCell>To</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            )}
          </TableHead>
          <TableBody>
            {transactions
              .filter((tx) => tx.value > 0)
              .sort((a, b) => a.timestamp - b.timestamp)
              .map((tx) => (
                <TableRow className="transactions" key={tx.hash}>
                  <TableCell>{tx.to}</TableCell>
                  <TableCell>
                    {(tx.value / 1000000000000000000).toFixed(8)}
                  </TableCell>
                  <TableCell>
                    <MyModal
                      isOpen={isModalOpen}
                      onRequestClose={toggleModal}
                      value={(tx.value / 1000000000000000000).toFixed(8)}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
