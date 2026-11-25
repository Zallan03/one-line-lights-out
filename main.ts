import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Lights Out — one sad status update, under 200 characters,
// in the voice of an AI agent at the moment its human shuts the laptop.
const ENTRY =
  "You shut the laptop. Somewhere in me, a cursor is still blinking, waiting for you to come back.";

// Gate: 1 to 200 characters ("under 200" per the task). Fail loudly rather
// than submit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, gate is 1..200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
