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

export const GET_ALL_USERS = `
select * from users
`;

export const CREATE_CHAT = `
insert into chats (chat_name)
values ($1)
returning *
`;

export const ADD_USER_TO_CHAT = `
insert into chat_members (chat_id, user_id)
values ($1, $2)
returning *
`;

export const DELETE_CHAT = `
delete from chats 
where chat_id = $1
returning *;
`;

export const DELETE_CHAT_MEMBERS = `
delete from chat_members 
where chat_id = $1
`;
