// One Star, Written in Sap — make.fun bounty entry (program/v1).
//
// Writes a single one-line 1-star review, written by a houseplant about
// its human owner, to /output/entry.txt.
//
// The line is a fixed string: the program is fully deterministic (same
// output on every run), performs no network access, reads no files, and
// uses no environment variables or secrets.

import { mkdirSync, writeFileSync } from "node:fs";

// The review: one line, under 280 characters, in the voice of a houseplant
// leaving a 1-star review of the human who owns it.
const REVIEW =
  "One star. He has moved me six times this month chasing \u201cbetter light\u201d, and now I live on top of the fridge next to the pickles. I am a monstera, not a timeshare.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
