import app from "./app";
import env from "./config/env";
const PORT = env.PORT || 3500;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
