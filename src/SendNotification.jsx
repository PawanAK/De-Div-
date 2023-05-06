// sendNotification.js
import web3 from "./Web3Config";

const sendNotification = async (address, message) => {
  if (!address) {
    alert("Please enter a valid wallet address.");
    return;
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    await web3.eth.sendTransaction({
      from: accounts[0],
      to: address,
      value: web3.utils.toWei("0", "ether"),
      data: web3.utils.asciiToHex(message),
    });
  } catch (error) {
    console.error("Error sending notification:", error);
    alert("Error sending notification:", error.message);
  }
};

export default sendNotification;
