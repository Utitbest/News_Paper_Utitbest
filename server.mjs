import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { updateVideoJSON } from './fetchVideos.mjs';
import cron from 'node-cron';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

updateVideoJSON();


cron.schedule('0 0 * * *', () => {
  console.log('⏰ Running daily video fetch...');
  updateVideoJSON();
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
