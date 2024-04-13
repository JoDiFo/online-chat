export const REGISTER_USER = `
insert
	into
	users (username,
	email,
	"password",
	activation_link)
values ($1, $2, $3, $4)
	returning *
`;

export const FIND_USER_BY_EMAIL = `
select * from users
where users.email = $1
`;

export const FIND_USER_BY_ID = `
select * from users
where users.user_id = $1
`;

export const FIND_USER_BY_ACTIVATION_LINK = `
select * from users
where users.activation_link = $1
`;

export const ACTIVATE_USER = `
update
	users
set
	is_activated = true
where
	user_id = $1
`;
