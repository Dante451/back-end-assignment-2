// Importing morgan
import morgan from "morgan";

// Use morgan for HTTP request logging
app.use(morgan("combined"));

export default app;