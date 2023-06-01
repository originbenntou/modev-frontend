import { server } from "@/mock/server";

export default defineNuxtPlugin(() => {
  server.listen();
});
