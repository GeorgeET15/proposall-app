const SuccessPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>😏 I *knew* you'd say YES!</h1>
      <p style={styles.subtitle}>Who could possibly resist this charm? 💖</p>

      <img
        src="https://media.tenor.com/jdJA0RmMQuwAAAAM/prince-charming-rose-tango-charming.gif"
        alt="Funny GIF"
        style={styles.gif}
      />
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
  },
  title: {
    color: "#fff",
    fontSize: "32px",
    fontWeight: "bold",
    textShadow: "4px 4px 6px rgba(0, 0, 0, 0.3)",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.3rem",
    fontStyle: "italic",
    color: "#fff",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    marginBottom: "20px",
  },
  gif: {
    width: "80%",
    maxWidth: "400px",
    borderRadius: "15px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
  },
};

export default SuccessPage;
