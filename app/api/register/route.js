export async function POST(req) {
  try {
    const body = await req.json();
    const {firstName, lastName, email, password} = body;

    return Response.json({ message: `Hi ${firstName} ${lastName}! Your email is ${email} and ${password}` }, { status: 200 })
  } catch(error) {
    return Response.json({}, { status: 400 });
  }
}