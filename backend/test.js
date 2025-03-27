// test.js
import { normalizeAndSort } from './services/matchmakingService.js';
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

(async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      dbName: "areto",
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected");

    // Call the normalization function
    const distances = await normalizeAndSort("67c4dfff0391af0dd39c792d", ["67c4e2590391af0dd39c792f", "67c4e292adb4e61f9b0f6418", "67c4e4936976596b1a9ff6d7", "67c607708403560060db1616", "67d5dd785d604c972484835d", "67e41061ca743c4b89f099c1", "67e4116bca743c4b89f099c4"]);
    console.log(distances)
    console.log("Done!");
  } catch (error) {
    console.error("Error during test:", error);
  } finally {
    // Disconnect from the database
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
})();
