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
    <div className="hero bg-purple-100 p-4 transition-all duration-300 ease-in-out">
      <TableContainer
        component={Paper}
        className="bg-green-100 rounded-lg shadow-md">
        <Table className="hero__table" aria-label="simple table">
          <TableHead>
            {showTableHeaders && (
              <TableRow className="bg-purple-200">
                <TableCell className="p-2 font-semibold text-purple-600">
                  To
                </TableCell>
                <TableCell className="p-2 font-semibold text-purple-600">
                  Value
                </TableCell>
              </TableRow>
            )}
          </TableHead>
          <TableBody>
            {transactions
              .filter((tx) => tx.value > 0)
              .sort((a, b) => a.timestamp - b.timestamp)
              .map((tx) => (
                <TableRow
                  className="transactions bg-green-200 hover:bg-green-300 transition-all duration-200 ease-in-out"
                  key={tx.hash}>
                  <TableCell className="p-2">{tx.to}</TableCell>
                  <TableCell className="p-2">
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
