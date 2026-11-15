import { redirect } from "@sveltejs/kit";

// The app entry point is the sign-in screen. Everything else is reached from there.
export const load = () => {
  throw redirect(307, "/login");
};
