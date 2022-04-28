/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    MONGODB_URI:
      'mongodb+srv://smppyb:RDuY1QwXrQugKFtr@smppyb.ne4tc.mongodb.net/smppyb-prod?retryWrites=true&w=majority',
  },
};
