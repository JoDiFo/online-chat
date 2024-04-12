export const REGISTER_USER = `
insert
	into
	users (username,
	email,
	"password",
	activation_link)
values ($1, $2, $3, $4)
	returning *
`

export const FIND_USER_BY_EMAIL = `
select * from users
where users.email = $1
`