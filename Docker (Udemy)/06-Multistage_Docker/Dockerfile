# -- Stage 01 -- Builder Mode
FROM node:23-alpine3.20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


# -- Stage 02 -- Production Mode
FROM node:23-alpine3.20

WORKDIR /app

COPY --from=builder /app /app

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "dev"]