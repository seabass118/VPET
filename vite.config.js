import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	root: "./client", // Update the root property to point to your client folder
	base: "/",
});
