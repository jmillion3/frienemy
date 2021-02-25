CREATE TABLE users 
(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(300) NOT NULL,
    firstName VARCHAR (50) NOT NULL,  
    lastName VARCHAR (50) NOT NULL,
    phone INT,
    profile_pic TEXT
);

CREATE TABLE ranker
(
    ranker_id SERIAL PRIMARY KEY,
    score INT NOT NULL,
    user_id REFERENCES user(user_id)
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
