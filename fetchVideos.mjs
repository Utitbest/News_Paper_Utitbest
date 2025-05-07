import fs from 'fs';
import fetch from 'node-fetch';

const YOUTUBE_API_KEY = 'AIzaSyC93liBehZOxodlzJYjDlc0GxOwFUty1is'; 
const topics = ['sports news', 'world news', 'technology'];

async function fetchVideosForTopic(topic) {
  try {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(topic)}&type=video&maxResults=5&key=${YOUTUBE_API_KEY}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data)
    if (!data.items || !Array.isArray(data.items)) {
      console.warn(`⚠️ No items returned for topic: ${topic}`);
      return [];
    }
    return data.items.map(item => ({
      topic,
      title: item.snippet.title,
      videoId: item.id.videoId,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt
    }));
  } catch (err) {
    console.error(`❌ Failed to fetch videos for "${topic}":`, err.message);
    return [];
  }
}

export async function updateVideoJSON() {
  let allVideos = [];

  for (const topic of topics) {
    const videos = await fetchVideosForTopic(topic);
    allVideos = allVideos.concat(videos);
  }

  try {
    fs.writeFileSync('public/video.json', JSON.stringify(allVideos, null, 2));
    console.log('✅ videos.json updated!');
  } catch (err) {
    console.error('❌ Failed to write videos.json:', err.message);
  }
}
