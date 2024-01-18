// pages/api/subscribe.js
import { NextResponse } from "next/server";

const MAILCHIMP_API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY; 
const LIST_ID = 'a686c22db9'; 
const SERVER_PREFIX = 'us17'; // e.g., 'us20'

export async function POST(req: Request) {
    try {
      const body = await req.json();
      const { email, phone } = body;
  
      // Construct data object for Mailchimp
      const data = {
        email_address: email,
        status: 'subscribed', // or 'pending' for double opt-in
        // Include phone number if it's provided
        ...(phone && { merge_fields: { PHONE: phone } })
      };
  
      const response = await fetch(`https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from Mailchimp:', errorData);
        throw new Error(`Error: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log("Mailchimp response data", responseData);
      return NextResponse.json({ message: 'Subscription successful', data: responseData }, { status: 200 });
    } catch (error: unknown) {
        // Check if error is an instance of Error
        if (error instanceof Error) {
          console.error("Server error:", error.message);
          return NextResponse.json({ message: 'Subscription failed', error: error.message }, { status: 500 });
        } else {
          // If it's not an Error instance, handle it as an unknown error
          console.error("An unknown error occurred");
          return NextResponse.json({ message: 'An unknown error occurred' }, { status: 500 });
        }
      }
    }
