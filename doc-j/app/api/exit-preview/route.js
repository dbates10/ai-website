import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") || "";

  // Exit the current user from "Preview Mode"
  draftMode().disable();

  // Set the cookies to None
  // Note: This step might be handled differently in the new Next.js App Router
  // as direct manipulation of response headers like this might not be supported.
  // You may need to set the cookie attributes when disabling draft mode.

  // Redirect the user back to the index page or specified slug
  return redirect(`/${slug}`);
}
