import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    try {
        const body = await request.json();
        
        if (!body.url || !body.shorturl) {
            return Response.json({ 
                success: false, 
                error: true, 
                message: 'Missing required fields' 
            }, { 
                status: 400 
            });
        }

        const client = await clientPromise;
        const db = client.db("blinklink");
        const collection = db.collection("url");

        // check if short url exists
        const doc = await collection.findOne({ shorturl: body.shorturl });
        if (doc) {
            return Response.json({ 
                success: false, 
                error: true, 
                message: 'URL Already Exists' 
            });
        }

        const result = await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl,
            createdAt: new Date()
        });

        return Response.json({ 
            success: true, 
            error: false, 
            message: 'URL Generated Successfully',
            data: result
        });

    } catch (error) {
        console.error('MongoDB Error:', error.message);
        return Response.json({ 
            success: false, 
            error: true, 
            message: `Database Error: ${error.message}` 
        }, { 
            status: 500 
        });
    }
}