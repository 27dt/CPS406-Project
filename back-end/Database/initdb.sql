CREATE TABLE users(
    uid SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE games(
    appid INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    rdate VARCHAR(255) NULL,
    price FLOAT NULL,
    about TEXT NULL,
    img VARCHAR(255) NULL,
    web VARCHAR(255) NULL,
    dev VARCHAR(255) NULL,
    pub VARCHAR(255) NULL,
    genre TEXT NULL,
    tags TEXT NULL
);

CREATE TABLE ratings(
    userid INT,
    gameid INT,
    rating INT NOT NULL,
    PRIMARY KEY(userid, gameid),
    FOREIGN KEY (userid) REFERENCES users(uid) ON DELETE CASCADE,
    FOREIGN KEY (gameid) REFERENCES games(appid) ON DELETE CASCADE
);

COPY games(appid, name, rdate, price, about, img, web, dev, pub, genre, tags)
FROM '/bin/filter_steam_games.csv'
DELIMITER ','
CSV HEADER;