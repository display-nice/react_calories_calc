import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// Алиасы перенесены из jsconfig.paths.json (ранее подключались через react-app-alias).
const src = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
	plugins: [react()],
	// Проект публикуется как project page: https://display-nice.github.io/react_calories_calc/
	// Без этого base все абсолютные пути к ассетам уедут в корень домена и страница будет пустой.
	base: "/react_calories_calc/",
	server: {
		host: "127.0.0.1",
	},
	preview: {
		host: "127.0.0.1",
	},
	build: {
		// Стандартная для Vite папка сборки
		outDir: "dist",
	},
	resolve: {
		alias: {
			"@components": `${src}/components`,
			"@css": `${src}/css`,
			"@fonts": `${src}/fonts`,
			"@img": `${src}/img`,
			"@utils": `${src}/utils`,
		},
	},
});
