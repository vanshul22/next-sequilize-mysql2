import { User } from '@/models/user';

export async function GET(request: Request) {
  try {
    await User.sync();
    const users = await User.findAll();
    return Response.json({ users })
  }
  catch (error: any) {
    return Response.json({ error: error.original.sqlMessage });
  }
}

export async function POST(request: Request) {
  try {
    const reqBody = await request.json(); // To read request data
    if (!reqBody.name && !reqBody.email) return Response.json({ error: "Please enter all details" });;
    const newUser = await User.create({ name: reqBody.name, email: reqBody.email });
    return Response.json({ newUser });
  } catch (error: any) {
    return Response.json({ error: error.original.sqlMessage })
  }
}

export async function PUT(request: Request) {
  try {
    const reqBody = await request.json(); // To read request data
    const [numOfAffectedRows] = await User.update(
      { email: reqBody.email, name: reqBody.name },
      { where: { id: reqBody.id } }
    );
    return numOfAffectedRows === 0 ? Response.json({ message: "User not found" }) : Response.json({ message: "User Updated Successfully" });
  } catch (error: any) {
    return Response.json({ error: error.original.sqlMessage });
  }
}

export async function DELETE(request: Request) {
  try {
    const reqBody = await request.json(); // To read request data
    const numOfAffectedRows = await User.destroy({ where: { id: reqBody.id } });
    return numOfAffectedRows === 0 ? Response.json({ message: "User not found" }) : Response.json({ message: "User deleted successfully" });
  } catch (error: any) {
    return Response.json({ error: error.original.sqlMessage });
  }
}