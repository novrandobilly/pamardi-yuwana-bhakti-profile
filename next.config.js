/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['scontent.fcgk30-1.fna.fbcdn.net', 'scontent.fcgk29-1.fna.fbcdn.net'],
  },
  env: {
    MONGODB_URI:
      'mongodb+srv://smppyb:RDuY1QwXrQugKFtr@smppyb.ne4tc.mongodb.net/smppyb-prod?retryWrites=true&w=majority',
  },
};
