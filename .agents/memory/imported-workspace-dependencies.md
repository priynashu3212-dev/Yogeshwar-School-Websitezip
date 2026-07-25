---
name: Imported workspace dependencies
description: Setup constraint for pnpm workspaces imported from zip archives.
---

Zip-imported pnpm workspaces can retain package manifests and a lockfile without installed dependencies, so artifact workflows may fail with missing Vite or esbuild even when the project files are otherwise intact.

**Why:** The archive does not reliably include `node_modules`, while workflows invoke workspace-local binaries immediately.

**How to apply:** Before diagnosing application code, run `pnpm install --frozen-lockfile` when the lockfile is present, then restart the affected workflow.