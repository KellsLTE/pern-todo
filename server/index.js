import express from 'express';
import cors from 'cors';
import router from './src/routes/api.routes.js';

const app = express();

app.use(cors());
app.use(express.json())
app.use(router)

app.listen(8080, () => console.log(`Server is listening on port 8080`));