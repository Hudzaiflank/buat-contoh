FROM node:18
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ⬇️ Tambahkan ENV langsung di dalam image
ENV DB_HOST=central-db
ENV DB_USER=root
ENV DB_PASSWORD=root
ENV DB_NAME=user_service_db
ENV PORT=4002

EXPOSE 4002
CMD ["node", "app.js"]
