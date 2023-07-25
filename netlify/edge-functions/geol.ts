import { Context } from 'https://edge.netlify.com'

export default (_: Request, context: Context) => {
	return Response.json({ ...context.geo })
}
