import express from 'express';
import { drinksPublicApi } from './routes';

// TODO: dotenv config

const app = express();
const port = process.env.PORT ?? 8080;

drinksPublicApi.register(app);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
