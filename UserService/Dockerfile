FROM node:18
WORKDIR /app

# Salin file dan install dependensi
COPY package*.json ./
RUN npm install

# Salin seluruh source code
COPY . .

# Tambahkan ENV langsung ke image (TIDAK PERLU .env lagi)
ENV DB_HOST=central-db
ENV DB_USER=root
ENV DB_PASSWORD=root
ENV DB_NAME=user_service_db
ENV PORT=4001

EXPOSE 4001
CMD ["node", "app.js"]
