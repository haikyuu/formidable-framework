import { Prop } from '@formidablejs/console'
import { MakeResourceCommand } from './MakeResourceCommand'
import Middleware from '@formidablejs/stubs/src/stubs/middleware/middleware'

export class MakeMiddlewareCommand < MakeResourceCommand

	get signature
		'make:middleware {name}'

	get props
		{
			name: Prop.string!.description('The name of the class')
		}

	get description
		'Create a new middleware class'

	get resource
		'Middleware'

	get stub
		new Middleware(self.argument('name'), {}, 'middleware', self.language.toLowerCase!)
