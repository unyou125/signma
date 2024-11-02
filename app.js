// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Check for hardcoded "cook" credentials
  if (username === "cook" && password === "cook") {
    req.session.userId = "cook"; // Store a session variable to indicate the user is logged in
    return res.send("Login successful");
  }

  // For other users, check the database
  try {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.userId = user._id; // Set the user ID in session
      return res.send("Login successful");
    } else {
      return res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    return res.status(500).send("Error logging in");
  }
});
