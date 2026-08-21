import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API)

const BLOG_SEGMENT_ID = "bc9ef58b-849b-4110-8858-8760f125fd79"
const BLOG_TOPIC_ID = "cbbc7867-0f32-4e15-b03d-9fd84ee2925a"

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName } =
      body;
    
    const { data, error } = await resend.contacts.create({
      email,
      firstName,
      unsubscribed: false,
      segments: [{ id: BLOG_SEGMENT_ID }],
      topics: [{ id: BLOG_TOPIC_ID, subscription: "opt_in" }]
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}