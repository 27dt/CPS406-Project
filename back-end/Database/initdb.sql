CREATE TABLE users(
    uid SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE games(
    appid INT PRIMARY KEY,
    name VARCHAR(255),
    rdate VARCHAR(255),
    about TEXT,
    img VARCHAR(255),
    web VARCHAR(255),
    dev VARCHAR(255),
    pub VARCHAR(255),
    genre VARCHAR(100)
);

CREATE TABLE ratings(
    userid INT,
    gameid INT,
    rating INT NOT NULL,
    PRIMARY KEY(userid, gameid),
    FOREIGN KEY (userid) REFERENCES users(uid) ON DELETE CASCADE,
    FOREIGN KEY (gameid) REFERENCES games(appid) ON DELETE CASCADE
);