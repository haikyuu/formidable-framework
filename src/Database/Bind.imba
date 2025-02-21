import isEmpty from '../Support/Helpers/isEmpty'
import Database from './Database'
import type Request from '../Http/Request/Request'

export default class Bind
	prop table\String
	prop first\Boolean

	def constructor table\String, first\Boolean = false
		self.table = table
		self.first = first
	
	def handle request\Request, key\Number
		const param  = Object.keys(request.request.params)[key]

		const value  = Object.values(request.request.params)[key]
		const column = param.split(':')[1] ?? 'id'

		const query = Database.table(table).where(column, value)

		first ? query.first! : query
