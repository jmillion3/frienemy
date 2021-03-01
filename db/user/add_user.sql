INSERT INTO users (email, username, password, first_name, last_name, phone, profile_pic)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;