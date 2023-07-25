import { Context } from 'https://edge.netlify.com'

export default (context: Context) => {
	// Here's what's available on context.geo

	// context: {
	//   geo: {
	//     city?: string;
	//     country?: {
	//       code?: string;
	//       name?: string;
	//     },
	//     subdivision?: {
	//       code?: string;
	//       name?: string;
	//     },
	//     latitude?: number;
	//     longitude?: number;
	//     timezone?: string;
	//   }
	// }

	return Response.json({
		geo: context.geo,
	})
}
