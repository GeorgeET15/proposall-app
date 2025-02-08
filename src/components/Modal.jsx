import { useState, useEffect } from "react";

function Modal({ onClose }) {
  const messages = [
    "Adding a touch of magic... ✨",
    "Casting a love spell... 💖",
    "Writing a love letter... 💌",
    "Applying a love potion... 🧪❤️",
    "Sprinkling fairy dust... 🧚‍♀️✨",
    "Sealing with a kiss... 💋",
    "Creating a heartwarming surprise... 🎁💕",
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 3000); // Change message every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <img
          src="https://www.icegif.com/wp-content/uploads/valentines-day-icegif-22.gif"
          alt="Loading Love"
          style={styles.gif}
        />
        <p style={styles.message}>{currentMessage}</p>
      </div>
    </div>
  );
}

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  gif: {
    width: "150px",
    height: "150px",
    borderRadius: "10px",
  },
  message: {
    marginTop: "15px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ff4081",
  },
};

export default Modal;
