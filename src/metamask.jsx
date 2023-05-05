import { ethers } from "ethers";
import { useState } from "react";
import Transact from "./transact";

const Metamask = () => {
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
        console.log(bal);
        setUserBallance(ethers.utils.formatEther(bal));
      });
  };

  const accountChanged = (accName) => {
    setDefaultAccount(accName);
    getBalance(accName);
  };

  return (
    <>
      <h1>MetaMask</h1>
      <button onClick={connectWallet}>Connect</button>
      <h3>Adress:{defaultAccount}</h3>
      <h3>Balance:{userBallance}</h3>
      <p>{errorMsg}</p>
      {defaultAccount && <Transact defaultAccount={defaultAccount} />}
    </>
  );
};

export default Metamask;
