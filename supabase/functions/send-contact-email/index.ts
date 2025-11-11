import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
	name: string;
	email: string;
	message: string;
}

const handler = async (req: Request): Promise<Response> => {
	if (req.method === "OPTIONS") {
		return new Response(null, { headers: corsHeaders });
	}

	try {
		const { name, email, message }: ContactRequest = await req.json();

		console.log("Sending contact emails for:", email);

		// Send confirmation email to customer
		const customerEmailResponse = await resend.emails.send({
			from: "Rebellion <onboarding@resend.dev>",
			to: [email],
			subject: "Thank you for contacting Rebellion!",
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #dc2626;">Thank you for reaching out, ${name}!</h1>
          <p>We have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin-top: 0;">Your message:</h3>
            <p style="color: #4b5563;">${message}</p>
          </div>
          
          <p>In the meantime, feel free to explore more about Rebellion and how we're revolutionizing fan management in Web3.</p>
          
          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>The Rebellion Team</strong>
          </p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 14px;">
            Contact us: <a href="mailto:Peter@rebelliontoken.com" style="color: #dc2626;">Peter@rebelliontoken.com</a>
          </p>
        </div>
      `,
		});

		if (customerEmailResponse.error) {
			console.error("Failed to send customer email:", customerEmailResponse.error);
			throw new Error(customerEmailResponse.error.message || "Failed to send customer email");
		}

		console.log("Customer email sent successfully:", customerEmailResponse);

		// Send notification email to admin
		const adminEmailResponse = await resend.emails.send({
			from: "Rebellion <onboarding@resend.dev>",
			to: ["thomson19960313@gmail.com"],
			subject: `New Contact Form Submission from ${name}`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #dc2626;">New Contact Form Submission</h1>
          
          <div style="background-color: #f3f4f6; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="background-color: #fff7ed; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #dc2626;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            This is an automated notification from the Rebellion website contact form.
          </p>
        </div>
      `,
		});

		if (adminEmailResponse.error) {
			console.error("Failed to send admin email:", adminEmailResponse.error);
			// Don't throw error for admin email failure - customer already got confirmation
		}

		console.log("Admin email sent successfully:", adminEmailResponse);

		return new Response(JSON.stringify({
			customer: customerEmailResponse,
			admin: adminEmailResponse
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
				...corsHeaders,
			},
		});
	} catch (error: any) {
		console.error("Error in send-contact-email function:", error);
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
