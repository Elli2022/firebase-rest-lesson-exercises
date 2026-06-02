import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const databaseUrl =
  "https://firebase-rest-lesson-exercises-default-rtdb.firebaseio.com";

const seed = JSON.parse(
  readFileSync(join(root, "scripts", "seed-data.json"), "utf8")
);

async function put(path, data) {
  const response = await fetch(`${databaseUrl}/${path}.json`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to seed ${path}: ${response.status} ${await response.text()}`);
  }

  console.log(`Seeded /${path}`);
}

await put("lesson/products", seed.lessonProducts);
await put("posts", seed.posts);

console.log("Open REST paths seeded. Protected /products is seeded via:");
console.log("  firebase database:set /products scripts/seed-products.json --force");
