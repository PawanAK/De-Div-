import React, { useState, useEffect } from "react";
import "./MyModel.css";
import sendNotification from "./SendNotification";

export default function MyModal({ value }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputFields, setInputFields] = useState([{ address: "" }]);
  const [splitEqually, setSplitEqually] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleInputChange = (index, event) => {
    let data = [...inputFields];
    data[index].address = event.target.value;
    setInputFields(data);
  };

  const addField = () => {
    setInputFields([...inputFields, { address: "" }]);
  };

  // Handle form submission here
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Loop through inputFields and send a notification to each friend's wallet address
    for (const input of inputFields) {
      const message = `You owe $${calculateShare()} to 0x3A80439CFC929ab1E832853707344016a2668e7a`;
      await sendNotification(input.address, message);
    }
  };

  const calculateShare = () => {
    if (splitEqually) {
      const numberOfFriends = inputFields.length;
      const sharePerFriend = value / numberOfFriends;
      return sharePerFriend.toFixed(2);
    }
  };

  return (
    <div>
      <button onClick={openModal} className="open-modal-btn">
        Split Bill
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <form onSubmit={handleSubmit}>
              {inputFields.map((input, index) => (
                <div key={index}>
                  <label htmlFor={`address${index}`}>
                    Friend's Wallet Address #{index + 1}
                  </label>
                  <input
                    id={`address${index}`}
                    type="text"
                    placeholder="Wallet Address"
                    value={input.address}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addField}
                className="add-field-btn">
                Add Field
              </button>
              <div>
                <input
                  type="checkbox"
                  id="splitEqually"
                  checked={splitEqually}
                  onChange={(e) => setSplitEqually(e.target.checked)}
                />
                <label htmlFor="splitEqually">Split equally?</label>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
            <div className="split-info">
              {splitEqually && (
                <>
                  <p>Total money getting split: ${value}</p>
                  <p>Each friend must pay: ${calculateShare()}</p>
                </>
              )}
            </div>
            <button onClick={closeModal} className="close-modal-btn">
              X Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
