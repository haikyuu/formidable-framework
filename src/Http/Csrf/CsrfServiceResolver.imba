import Route from '../Router/Route'
import ServiceResolver from '../../Support/ServiceResolver'

export default class CsrfServiceResolver < ServiceResolver

	def boot
		Route.get('csrf-cookie', do(request, reply)
			reply.code(204)

			''
		).middleware('session')
