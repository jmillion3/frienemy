-- SELECT first_name, last_name, profile_pic 
-- FROM users u
-- JOIN user_friends uf 
-- ON uf.user_id = u.user_id;

-- SELECT * FROM user_friends;

SELECT user_id, username, first_name, last_name, profile_pic 
FROM users;