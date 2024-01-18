// Import necessary functions from Next.js
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") || "";
  // Check the secret
  if (secret !== process.env.STORYBLOK_PREVIEW_TOKEN) {
    return new Response("Invalid token", { status: 401 });
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable({
    // Optionally set other cookie attributes here
  });

  // Set cookie to None, so it can be read in the Storyblok iframe
  const cookies = request.headers.get("Set-Cookie");
  if (cookies) {
    request.headers.set(
      "Set-Cookie",
      cookies.map((cookie) =>
        cookie.replace("SameSite=Lax", "SameSite=None;Secure")
      )
    );
  }

  // Redirect to the path from entry
  return redirect(`/${slug}`);
}
