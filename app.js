// app.js
// ... (existing code)

// Register Route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).send("User already exists");
  }

  // Automatically register "skibidi" user
  if (username === "skibidi" && password === "skibidi") {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    return res.status(201).send("User registered successfully");
  }

  // Default case (you may want to customize this behavior)
  return res.status(400).send("Invalid registration data");
});

// ... (remaining code)
