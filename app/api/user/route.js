import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    return Response.json({ token: `${email}-${password}` }, { status: 200 })
  } catch(error) {
    return Response.json({}, { status: 400 });
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json();
    const { token } = body;

    return Response.json({ token: `${email}-${password}` }, { status: 200 })
  } catch(error) {
    return Response.json({}, { status: 400 });
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json();
    const { token } = body;

    return Response.json({ token: `${email}-${password}` }, { status: 200 })
  } catch(error) {
    return Response.json({}, { status: 400 });
  }
}