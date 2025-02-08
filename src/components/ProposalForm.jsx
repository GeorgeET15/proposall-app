import { useRef, useState } from "react";
import { createProposal } from "../supabase";
import Modal from "./Modal";

const ProposalForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsModalOpen(true);
    const id = await createProposal(name, message);
    if (id) {
      setTimeout(() => {
        setLoading(false);
        setIsModalOpen(false);
        setLink(`${window.location.origin}/proposal/${id}`);
      }, 3000);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "💖 A Special Message for You",
        text: "Check this out!",
        url: link,
      });
    } else {
      window.open(
        `https://wa.me/?text=${encodeURIComponent("Check this out! " + link)}`,
        "_blank"
      );
    }
  };

  return (
    <div style={styles.container}>
      {/* GIF on Top */}
      <img
        src="https://www.icegif.com/wp-content/uploads/valentines-day-icegif-27.gif"
        alt="Love GIF"
        style={styles.gif}
      />

      <h1 style={styles.title}>Send a Proposal</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="His/Her Name"
          required
          style={styles.input}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
          style={{ ...styles.input, height: "100px", resize: "none" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={styles.button}
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Generate Link"}
        </button>

        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      </form>

      {link && (
        <div style={styles.linkContainer}>
          <p>💖 Share this link:</p>
          <input type="text" value={link} readOnly style={styles.linkInput} />
          <div style={styles.buttonContainer}>
            <button onClick={handleCopy} style={styles.copyButton}>
              {copied ? "✅ Copied!" : "📋 Copy Link"}
            </button>
            <button onClick={handleShare} style={styles.shareButton}>
              📤 Share Link
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Made with ❤️ in Kochi</p>
        <p>
          View it on{" "}
          <a
            href="https://github.com/GeorgeET15/proposall-app"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.githubLink}
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100hw",
    padding: "20px",
    boxSizing: "border-box",
  },
  gif: {
    width: "200px",
    height: "auto",
    marginBottom: "15px",
  },
  title: {
    color: "#ff4a6e",
    textAlign: "center",
    fontSize: "20px",
    marginBottom: "20px",
    fontFamily: "'Press Start 2P', cursive",
  },
  form: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "16px",
    transition: "0.3s",
    outline: "none",
    boxSizing: "border-box",
  },
  button: {
    background: "#ff4a6e",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    width: "20px",
    height: "20px",
    border: "3px solid white",
    borderTop: "3px solid transparent",
    borderRadius: "50%",
    animation: "spin 0.7s linear infinite",
  },
  linkContainer: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  linkInput: {
    width: "90%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    textAlign: "center",
    margin: "5px 0",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  copyButton: {
    background: "#6c5ce7",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  },
  shareButton: {
    background: "#00b894",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  },
  footer: {
    marginTop: "30px",
    textAlign: "center",
    color: "#555",
    fontSize: "14px",
    fontWeight: "bold",
  },
  githubLink: {
    color: "#ff4a6e",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "color 0.3s",
  },
};

// Animation for the spinner
const styleTag = document.createElement("style");
styleTag.innerHTML = `
@keyframes spin {
  to { transform: rotate(360deg); }
}
`;
document.head.appendChild(styleTag);

export default ProposalForm;
