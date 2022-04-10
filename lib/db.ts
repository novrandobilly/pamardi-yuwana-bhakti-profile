import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
  let uri = process.env.MONGODB_URI || '';
  let client;
  try {
    client = await MongoClient.connect(uri);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
      throw new Error(err.message);
    }
    console.log(err);
    throw new Error('Something went wrong');
  }
  return client;
};
