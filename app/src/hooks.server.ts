import Gooogle from "@auth/core/providers/google";
import { SvelteKitAuth } from "@auth/sveltekit";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "$env/static/private";

export const handle = SvelteKitAuth({
  providers: [
    Gooogle(
      {
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
      },
    ),
  ],
  secret: "fasfdasjkflasdjflkajslkjfasdk(jfsdlk(fjslka(jflk(dajflkdasjflk(asj",
});
