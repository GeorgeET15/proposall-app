import { useEffect, useState } from "react";
import { getProposal } from "../supabase";
import { useParams, useNavigate } from "react-router-dom";

const ProposalPage = () => {
  const { id } = useParams();
  const [proposal, setProposal] = useState(null);
  const [noClicks, setNoClicks] = useState(0);
  const [noPosition, setNoPosition] = useState({ top: "0px", left: "0px" });
  const navigate = useNavigate();

  useEffect(() => {
    getProposal(id).then((data) => {
      if (data) setProposal(data);
    });
  }, [id]);

  const handleNoClick = () => {
    setNoClicks(noClicks + 1);
    setNoPosition({
      top: `${Math.random() * 200 - 100}px`,
      left: `${Math.random() * 200 - 100}px`,
    });
  };

  return (
    <div style={styles.container}>
      {proposal ? (
        <>
          <img
            src="https://media.tenor.com/hOZuAPhGsA8AAAAj/peach-goma-puppy-eyes-starry.gif"
            alt="Proposal GIF"
            style={styles.gif}
          />
          <h1 style={styles.title}>
            Hey {proposal.name}, will you go out with me? 💖
          </h1>
          <p style={styles.message}>"{proposal.message}"</p>
          <div style={styles.buttons}>
            <button
              style={{
                ...styles.yesButton,
                fontSize: `${1 + noClicks * 0.3}rem`,
                padding: `${12 + noClicks * 5}px 30px`,
              }}
              onClick={() => navigate("/success")}
            >
              Yes 💖
            </button>
            {noClicks <= 5 && (
              <button
                style={{
                  ...styles.noButton,
                  transform: `translate(${noPosition.left}, ${noPosition.top})`,
                }}
                onClick={handleNoClick}
              >
                No 🙅‍♂️
              </button>
            )}
          </div>
        </>
      ) : (
        <p style={styles.loading}>Loading...</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
  },
  gif: {
    width: "100%",
    maxWidth: "250px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#ff4d79",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  message: {
    fontSize: "1.3rem",
    color: "#555",
    marginBottom: "20px",
    fontStyle: "italic",
    maxWidth: "80%",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    position: "relative",
  },
  yesButton: {
    backgroundColor: "#ff4d79",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "1rem",
    padding: "15px 40px",
    fontWeight: "bold",
    boxShadow: "0px 8px 15px rgba(255, 77, 121, 0.3)",
  },
  noButton: {
    backgroundColor: "#fff",
    color: "#ff4d79",
    border: "2px solid #ff4d79",
    padding: "15px 40px",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "transform 0.3s ease, background 0.3s ease",
    fontWeight: "bold",
  },
  loading: {
    fontSize: "1.5rem",
    color: "#777",
  },
};

export default ProposalPage;
