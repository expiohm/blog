const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'living-room.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'kitchen.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'bedroom.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'office.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'hotel-lobby.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'restaurant.jpg'
  }
];

const downloadDir = path.join(process.cwd(), 'public', 'images', 'projects');

// Create directory if it doesn't exist
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

images.forEach(({ url, filename }) => {
  const filePath = path.join(downloadDir, filename);
  const file = fs.createWriteStream(filePath);

  https.get(url, (response) => {
    response.pipe(file);

    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {});
    console.error(`Error downloading ${filename}:`, err.message);
  });
}); 