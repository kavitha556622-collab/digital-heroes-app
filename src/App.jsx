import { useState } from "react";

function App() {
  const [score, setScore] = useState("");
  const [date, setDate] = useState("");
  const [scores, setScores] = useState([]);
  const [plan, setPlan] = useState("");
  const [charity, setCharity] = useState("Education Fund");
  const [page, setPage] = useState("login");

  const addScore = () => {
    if (!score || !date) {
      alert("Please enter date and score");
      return;
    }

    const numericScore = Number(score);

    if (numericScore < 1 || numericScore > 45) {
      alert("Score must be between 1 and 45");
      return;
    }

    const duplicateDate = scores.find(
      (item) => item.date === date
    );

    if (duplicateDate) {
      alert("Score already exists for this date");
      return;
    }

    const newScore = {
      score: numericScore,
      date: date,
    };

    setScores((prev) =>
      [newScore, ...prev].slice(0, 5)
    );

    setScore("");
    setDate("");
  };

  const cardStyle = {
    width: "380px",
    margin: "30px auto",
    padding: "24px",
    borderRadius: "14px",
    background: "white",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  };

  const buttonStyle = {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
    marginRight: "10px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        background: "#f5f7fb",
      }}
    >
      <h1 style={{ marginBottom: "8px" }}>
        Digital Heroes
      </h1>

      <h2
        style={{
          color: "#555",
          fontWeight: "normal",
          fontSize: "20px", 
          margintop: "30px",
        }}
      >
        Golf Subscription & Charity Platform
      </h2>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <button
          style={buttonStyle}
          onClick={() => setPage("login")}
        >
          Login
        </button>

        <button
          style={buttonStyle}
          onClick={() => setPage("signup")}
        >
          Sign Up
        </button>

        <button
          style={buttonStyle}
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>

        <button
          style={buttonStyle}
          onClick={() => setPage("admin")}
        >
          Admin
        </button>
      </div>

      {page === "login" && (
        <div style={cardStyle}>
          <h3>Login</h3>
          <input
            type="email"
            placeholder="Enter Email"
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Enter Password"
            style={inputStyle}
          />
          <button
            style={buttonStyle}
            onClick={() => setPage("dashboard")}
          >
            Login
          </button>
        </div>
      )}

      {page === "signup" && (
        <div style={cardStyle}>
          <h3>Sign Up</h3>
          <input
            type="text"
            placeholder="Enter Name"
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Enter Email"
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Enter Password"
            style={inputStyle}
          />
          <button
            style={buttonStyle}
            onClick={() => setPage("dashboard")}
          >
            Create Account
          </button>
        </div>
      )}

      {page === "dashboard" && (
        <div style={cardStyle}>
          <h3>User Dashboard</h3>

          <input
            type="date"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="Enter Score"
            value={score}
            onChange={(e) =>
              setScore(e.target.value)
            }
            style={inputStyle}
          />

          <button
            style={buttonStyle}
            onClick={addScore}
          >
            Add Score
          </button>

          <h4>Last 5 Scores</h4>
          {scores.length === 0 ? (
            <p>No scores added yet</p>
          ) : (
            scores.map((item, index) => (
              <p key={index}>
                {item.date} - Score: {item.score}
              </p>
            ))
          )}

          <h4>Select Charity</h4>
          <select
            value={charity}
            onChange={(e) =>
              setCharity(e.target.value)
            }
            style={inputStyle}
          >
            <option>Education Fund</option>
            <option>Child Care Support</option>
            <option>Health Foundation</option>
          </select>

          <p>Selected Charity: {charity}</p>

          <h4>Subscription Plan</h4>
          <button
            style={buttonStyle}
            onClick={() => setPlan("Monthly")}
          >
            Monthly
          </button>

          <button
            style={buttonStyle}
            onClick={() => setPlan("Yearly")}
          >
            Yearly
          </button>

          <p>Selected Plan: {plan || "None"}</p>
        </div>
      )}

      {page === "admin" && (
        <div style={cardStyle}>
          <h3>Admin Dashboard</h3>
          <p>Total Users: 25</p>
          <p>Total Prize Pool: ₹50,000</p>
          <p>Total Charities: 3</p>
          <p>Draw Status: Pending</p>

          <button style={buttonStyle}>
            Run Monthly Draw
          </button>

          <button style={buttonStyle}>
            Verify Winners
          </button>
        </div>
      )}
    </div>
  );
}

export default App;