const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://erioluwamole12:Erioluwa2008@cluster0.zri6n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('testDB'); 
    const collection = database.collection('testCollection'); 

    
    const doc = { name: "Oluwaseun", age: 30, city: "Lagos" };
    const result = await collection.insertOne(doc);

    console.log(`Inserted with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
