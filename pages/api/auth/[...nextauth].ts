// import NextAuth from 'next-auth/next';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { connectToDatabase } from '../../../lib/db';
// import { compare } from 'bcryptjs';

// export default NextAuth({
//   session: {
//     strategy: 'jwt',
//     //       sec*min*hour*day
//     maxAge: 60 * 60 * 24 * 7,
//   },
//   secret: 'one_batch_two_batch_penny_and_dime',
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user._id;
//         token.adminId = user.adminId;
//         token.adminRole = user.adminRole;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.id = token.id;
//       session.adminId = token.adminId;
//       session.adminRole = token.adminRole;
//       return session;
//     },
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         adminId: { label: 'adminId', type: 'text' },
//         adminPassword: { label: 'adminPassword', type: 'password' },
//         admin: { label: 'Admin', type: 'boolean' },
//       },
//       async authorize(credentials, req) {
//         if (credentials?.admin) {
//           const client = await connectToDatabase();
//           const db = client.db();
//           const admin = await db.collection('admins').findOne({
//             adminId: credentials.adminId,
//           });
//           if (!admin) {
//             throw new Error('Admin not found');
//           }
//           const isValid = await compare(credentials.adminPassword, admin.adminPassword);
//           if (!isValid) {
//             throw new Error('Invalid password');
//           }
//           return {
//             _id: admin._id.toString(),
//             adminId: admin.adminId,
//             adminRole: admin.adminRole,
//           };
//         }
//         return null;
//       },
//     }),
//   ],
// });
