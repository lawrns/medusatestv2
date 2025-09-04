FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
# --- runtime launcher ---
COPY start.sh /start.sh
RUN chmod +x /start.sh
ENV NPM_CONFIG_YES=true
EXPOSE 8080
CMD ["/bin/sh","/start.sh"]
