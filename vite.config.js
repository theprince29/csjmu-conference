import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // React plugin for Vite
    sitemap({
      hostname: 'https://csjmu-conference.vercel.app', // Replace with your website URL
      outDir: 'dist', // Output directory for the sitemap (default is dist)
      routes: [
        "/",
        "/steering-committee",
        "/advisory-committee",
        "/call-for-papers",
        "/call-for-special-sessions",
        "/call-for-sponsopship",
        "/important-dates",
        "/crc-guidelines",
        "/submission-guidelines",
        "/technical-program-committee",
        "/registration",
        "/publications",
        "/speakers",
        "/gallery",
        "/nearby-attractions",
        "/contact-us",
      ], // Define your routes
      changefreq: 'weekly', // Frequency of page updates
      priority: 0.7, // Default priority
    })
  ],
});
