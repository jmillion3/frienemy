SELECT user_id, email, username, first_name, last_name, phone, profile_pic
FROM users
WHERE username = $1;