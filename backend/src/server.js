import express from 'express';
import { ENV } from './config/env.js';
import cors from 'cors';

const app = express();
app.use(express.json());    
app.use(cors());

app.get('/api/health', (req, res) => {
    res.send('Api is running!');
});

app.listen(ENV.PORT, () => {
    console.log(`Server running at http://localhost:${ENV.PORT}`);
});