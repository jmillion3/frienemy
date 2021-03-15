SELECT * FROM score
JOIN users
ON scores.user_id = users.user_id;