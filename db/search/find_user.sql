SELECT first_name, last_name 
FROM users
WHERE first_name = $1
AND last_name = $2;