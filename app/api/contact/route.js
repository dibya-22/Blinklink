import clientPromise from "@/lib/mongodb"



export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("blinklink");
    const collection = db.collection("contact");

    const result = await collection.insertOne({
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
        createdAt: (new Date(Date.now())).toLocaleString()
    })

    return Response.json({ success: true, error: false, message: 'Query Added Successfully' });
}