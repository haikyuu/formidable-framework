import argon2 from 'argon2'
import bcrypt from 'bcrypt'
import InvalidHashDriverException from './Exceptions/InvalidHashDriverException'

const settings = {
	config: null
}

export default class Hash

	static def make value\String
		if settings.config.driver == 'argon2'
			return await argon2.hash(value, settings.config.argon2)

		if settings.config.driver == 'bcrypt'
			return await bcrypt.hash(value, settings.config.bcrypt.rounds ?? 10)

		throw new InvalidHashDriverException "{settings.config.driver} is not a valid driver."

	static def check value\String, hash\String
		if settings.config.driver == 'argon2'
			return await argon2.verify(value, hash, settings.config.argon2)

		if settings.config.driver == 'bcrypt'
			return await bcrypt.compare(value, hash)

		throw new InvalidHashDriverException "{settings.config.driver} is not a valid driver."

	static def configure config\Object
		if settings.config != null then throw new Error 'Hashing has been already configured.'

		settings.config = config
