import { ethers } from "ethers";
import { useState } from "react";
import Transact from "./transact";
import Logo from "./Logo";
import { Button, Typography, Box, Slide, Grow } from "@mui/material";
import "./Metamask.css";

const Metamask = ({ transactions, setTransactions }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBallance, setUserBallance] = useState(null);

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        accountChanged([res[0]]);
      });
    } else {
      setErrorMsg("install metamask");
    }
  };

  const getBalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [String(address), "latest"],
      })
      .then((bal) => {
        setUserBallance(ethers.utils.formatEther(bal));
      });
  };

  const accountChanged = (accName) => {
    setDefaultAccount(accName);
    getBalance(accName);
  };

  return (
    <div className="metamask">
      <Logo connected={!!defaultAccount} />
      {!defaultAccount ? (
        <Box className="metamask__connectMeta">
          <Slide direction="up" in={!defaultAccount} mountOnEnter unmountOnExit>
            <Button variant="contained" color="primary" onClick={connectWallet}>
              Connect
            </Button>
          </Slide>
          <Typography>{errorMsg}</Typography>
        </Box>
      ) : (
        <Box className="metamask__accountInfo">
          <Grow in={!!defaultAccount}>
            <Typography className="metamask__accountAddress over_right_typo">
              {defaultAccount}
            </Typography>
          </Grow>
          <Transact
            defaultAccount={defaultAccount}
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </Box>
      )}
    </div>
  );
};

export default Metamask;
