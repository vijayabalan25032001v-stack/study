import cors from "cors";
import express from "express";

const defaultTasks = [
  { id: 1, title: "Set up API", done: true },
  { id: 2, title: "Set up frontend", done: false }
];

export function createApp(seedTasks = defaultTasks) {
  const app = express();
  let tasks = seedTasks.map((task) => ({ ...task }));
  let nextId = tasks.reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1;

  app.use(cors());
  app.use(express.json());

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/tasks", (_req, res) => {
    res.json({ tasks });
  });

  app.post("/api/tasks", (req, res) => {
    const title = String(req.body?.title || "").trim();

    if (!title) {
      return res.status(400).json({ message: "title is required" });
    }

    const task = { id: nextId, title, done: false };
    nextId += 1;
    tasks.push(task);

    return res.status(201).json({ task });
  });

  return app;
}

