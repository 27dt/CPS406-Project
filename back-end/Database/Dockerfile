FROM postgres:17

ADD RawCSVAndTools/filter_steam_games.csv bin/filter_steam_games.csv
COPY initdb.sql /docker-entrypoint-initdb.d/initdb.sql