import { User } from '@/models/user';

export async function GET(request: Request) {
    try {
        const id = request.url.split("users/")[1];
        const users = await User.findOne({ where: { id: id } });
        return Response.json({ users })
    }
    catch (error: any) {
        return Response.json({ error: error.original.sqlMessage });
    }
}