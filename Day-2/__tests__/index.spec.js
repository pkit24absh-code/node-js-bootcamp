import request from "supertest";
import app from "../app.js";

describe("GET /", () => {
    it("should return status 200", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toEqual(200);
    });

    it("should return a welcome message", async () => {
        const res = await request(app).get("/");
        expect(res.body).toHaveProperty("message", "Welcome to the Express server!");
    });

    it("should return JSON content type", async () => {
        const res = await request(app).get("/");
        expect(res.headers["content-type"]).toMatch(/json/);
    });
});

describe("Unknown routes", () => {
    it("should return 404 for unknown routes", async () => {
        const res = await request(app).get("/unknown");
        expect(res.statusCode).toEqual(404);
    });
});