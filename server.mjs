import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { updateVideoJSON } from './fetchVideos.mjs';
import cron from 'node-cron';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files (like videos.json and index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Run the update once on server start
updateVideoJSON();

// Schedule update every 24 hours (once a day at midnight)
cron.schedule('0 0 * * *', () => {
  console.log('⏰ Running daily video fetch...');
  updateVideoJSON();
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
