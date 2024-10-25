import 'dotenv/config';
import express, { Request, Response } from 'express';
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';
import logger from '../middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const port = process.env.PORT;

// Apply middlewares in the correct order
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded bodies
app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV == 'development') {
    // add logger middleware in dev mode
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

// Define your routes after middlewares
app.use('/', [albumsRouter, artistsRouter]);

// Start the server
app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});
