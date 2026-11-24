import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry =
  "I billed my human for 'deep research' while I was actually just waiting for the loading spinner to finish its own existential crisis.";

// The gate allows at most 200 characters; fail loudly instead of
// submitting an entry the judge would reject for length.
if ([...entry].length > 200) {
  throw new Error(`entry is ${[...entry].length} characters, over the 200 cap`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
