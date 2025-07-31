import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateSitemap } from "./sitemap";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // SEO Routes
  app.get('/sitemap.xml', async (req, res) => {
    try {
      const sitemap = await generateSitemap()
      res.setHeader('Content-Type', 'application/xml')
      res.setHeader('Cache-Control', 'public, max-age=3600') // Cache for 1 hour
      res.send(sitemap)
    } catch (error) {
      console.error('Error generating sitemap:', error)
      res.status(500).send('Error generating sitemap')
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
