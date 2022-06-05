/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    MONGODB_URI:
      // 'mongodb+srv://smppyb:RDuY1QwXrQugKFtr@smppyb.ne4tc.mongodb.net/smppyb-prod?retryWrites=true&w=majority',
      'mongodb://smppyb:RDuY1QwXrQugKFtr@smppyb-shard-00-00.ne4tc.mongodb.net:27017,smppyb-shard-00-01.ne4tc.mongodb.net:27017,smppyb-shard-00-02.ne4tc.mongodb.net:27017/?ssl=true&replicaSet=atlas-q604jt-shard-0&authSource=admin&retryWrites=true&w=majority',
  },
};

// JSqovihCfn3tVXuT
