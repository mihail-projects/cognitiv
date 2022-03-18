import { MongoClient } from "mongodb";

export async function post({ request }) {

    const uri = "mongodb+srv://mihalisp:XC095OT4BGyTjuLb@cluster0.qvdrg.mongodb.net/db?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    await request.json().then(async body => {

        try {

            await client.connect();
            const db = client.db("db");
            const files = db.collection("files");

            // create a document to insert
            const doc = {
                fileID: body.fileID,
                content: body.content
            }

            const result = await files.insertOne(doc);

            return {
                body: { result: result.insertedId }
            };

        } finally {

            await client.close();

            return {
                body: { result: -1 }
            };

        }

    })

}