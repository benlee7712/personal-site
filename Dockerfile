FROM node:alpine as frontend-build

COPY /frontend .

RUN npm install
RUN npm run build

FROM rust:1.60-alpine as builder

COPY /api .

RUN rustup target add x86_64-unknown-linux-musl
RUN apk add --no-cache musl-dev
ENV PKG_CONFIG_ALLOW_CROSS=1
RUN cargo build --release

FROM alpine:latest
EXPOSE 8080

RUN mkdir frontend
RUN mkdir api

COPY --from=frontend-build . /frontend
COPY --from=builder . /api
WORKDIR /api

CMD ["./target/release/personal-site"]
