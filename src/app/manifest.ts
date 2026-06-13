import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Porter F&O",
    description: "Financial Leadership Without the Full-Time Cost",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0f2744",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
