import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("magni");

       const movies = await db
           .collection("adventure_time")
           .find({})
           .sort({ metacritic: -1 })
           .limit(1)
           .toArray();

       res.json(movies);
   } catch (e) {
       console.error(e);
   }
};