import { connectDB } from "./config/database";
import app from "./app";
const PORT = process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(
      `Server is running on port ${PORT} and http://localhost:${PORT}/`
    );
  });
});
