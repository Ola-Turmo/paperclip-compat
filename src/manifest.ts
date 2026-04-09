import type { PaperclipPluginManifestV1 } from "@paperclipai/plugin-sdk";

const manifest: PaperclipPluginManifestV1 = {
  id: "uos.paperclip-compat",
  apiVersion: 1,
  version: "0.1.0",
  displayName: "Paperclip Compat",
  description: "Compatibility layer for Paperclip SDK, shared models, and host coupling.",
  author: "turmo.dev",
  categories: ["automation"],
  capabilities: [
    "events.subscribe",
    "plugin.state.read",
    "plugin.state.write"
  ],
  entrypoints: {
    worker: "./dist/worker.js",
    ui: "./dist/ui"
  },
  ui: {
    slots: [
      {
        type: "dashboardWidget",
        id: "health-widget",
        displayName: "Paperclip Compat Health",
        exportName: "DashboardWidget"
      }
    ]
  }
};

export default manifest;
