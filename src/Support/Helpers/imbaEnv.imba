export default def imbaEnv stringify\Boolean = true
	const prefix = 'IMBA_APP_'
	const envList = {}

	for own env, value of process.env
		if env.startsWith(prefix)
			envList[env.slice(prefix.length)] = value

	stringify ? JSON.stringify(envList) : envList
