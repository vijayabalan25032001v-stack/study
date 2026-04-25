import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";

describe("API", () => {
  it("returns health status", async () => {
    const app = createApp([]);
    const response = await request(app).get("/api/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  it("creates a new task", async () => {
    const app = createApp([]);

    const createResponse = await request(app)
      .post("/api/tasks")
      .send({ title: "Learn CI/CD" });

    expect(createResponse.status).toBe(201);
    expect(createResponse.body.task.title).toBe("Learn CI/CD");

    const listResponse = await request(app).get("/api/tasks");
    expect(listResponse.body.tasks).toHaveLength(1);
  });
});

