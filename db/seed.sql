CREATE TABLE users 
(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(300) NOT NULL,
    first_name VARCHAR (50) NOT NULL,  
    last_name VARCHAR (50) NOT NULL,
    phone INT,
    profile_pic TEXT
);

CREATE TABLE user_friends(
  user_friends_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  friend_id INT REFERENCES users(user_id)
);

CREATE TABLE scores(
  score_id SERIAL PRIMARY KEY,
  score INT,
  user_id INT REFERENCES users(user_id),
  friend_id INT REFERENCES users(user_id)
);

-- CREATE TABLE comments
-- (
--    comments_id SERIAL PRIMARY KEY,
--     content VARCHAR (200),
--     author_id INT REFERENCES users(id),
--     date_created TIMESTAMP
-- );

-- CREATE TABLE like 
-- (
--     like_id SERIAL PRIMARY KEY,
--     like INT,
--     dislike INT
-- );
