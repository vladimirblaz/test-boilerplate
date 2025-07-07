import { readdirSync } from "fs";

export default defineEventHandler(async () => {
  return readdirSync("assets/icons").map((icon: string) => icon.replace(".svg", ""));
});