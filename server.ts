import express from 'express';
import { createServer as createViteServer } from 'vite';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Booking } from './models/Booking.ts';
import { Contact } from './models/Contact.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // MongoDB Connection
  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lumina-laundry';
  
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }

  app.use(express.json());

  // API Routes
  app.post('/api/bookings', async (req, res) => {
    try {
      const booking = new Booking(req.body);
      await booking.save();
      res.status(201).json({ success: true, data: booking });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  });

  app.get('/api/bookings', async (req, res) => {
    try {
      const bookings = await Booking.find().sort({ createdAt: -1 });
      res.json({ success: true, data: bookings });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  });

  app.post('/api/contact', async (req, res) => {
    try {
      const contact = new Contact(req.body);
      await contact.save();
      res.status(201).json({ success: true, data: contact });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  });

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
