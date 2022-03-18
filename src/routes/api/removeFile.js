import { MongoClient } from "mongodb";

export async function post({ request }) {

    const uri = "mongodb+srv://mihalisp:XC095OT4BGyTjuLb@cluster0.qvdrg.mongodb.net/db?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    await request.json().then(async body => {

        try {

            await client.connect();
            const db = client.db("db");
            const files = db.collection("files");

            // Query for a movie that has title "Annie Hall"
            const query = { fileID: body.fileID };

            const result = await files.deleteOne(query);

            return {
                body: { result: result.deletedCount }
            };

        } finally {

            await client.close();

            return {
                body: { result: -1 }
            };

        }

    })

}