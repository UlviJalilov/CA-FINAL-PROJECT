import express, { Request, Response } from "express";
import { MongoClient } from "mongodb";

const router = express.Router();

const uri = process.env.MONGO_URI as string; const client = new MongoClient(uri);
const dbName = "reviews";
const collectionName = "reviews";

router.post("/", async (req: Request, res: Response) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const review = {
            ...req.body,
            createdAt: new Date() 
        };

        const result = await collection.insertOne(review);

        res.status(201).json({ message: "Review saved", reviewId: result.insertedId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to save review" });
    } finally {
        await client.close();
    }
});

router.get("/", async (_req: Request, res: Response) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const reviews = await collection.find({}).toArray();
        res.json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch reviews" });
    } finally {
        await client.close();
    }
});

export default router;
