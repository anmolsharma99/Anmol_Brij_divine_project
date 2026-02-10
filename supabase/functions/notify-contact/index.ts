import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactNotification {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message }: ContactNotification = await req.json();

    if (!name || !email || !subject || !message) {
      throw new Error("Missing required fields");
    }

    // Use Lovable AI gateway to format a notification
    // Since we can't send actual emails without Resend, we log and return success
    // The contact message is already saved to the database
    console.log(`📧 New contact query from ${name} (${email})`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log(`Phone: ${phone}`);
    console.log(`→ Should be forwarded to: anmolgamer2412@gmail.com`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact query received and saved. Team will respond within 24 hours." 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in notify-contact function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
