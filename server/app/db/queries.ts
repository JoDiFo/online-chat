export const REGISTER_USER = `
insert
	into
	users (username,
	email,
	"password")
values ($1, $2, $3)
`