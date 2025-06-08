# Gunakan image resmi MySQL
FROM mysql:8.0

# Salin file SQL ke lokasi init bawaan MySQL
COPY db.sql /docker-entrypoint-initdb.d/init.sql

# Environment default (optional override in docker-compose)
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=user_service_db
