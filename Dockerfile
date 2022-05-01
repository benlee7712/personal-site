FROM node:alpine as frontend-build

COPY /frontend .

RUN npm install
RUN npm run build

FROM rust:1.60 as builder

COPY /api .

RUN apt-get update && apt-get -y install ca-certificates cmake musl-tools libssl-dev && rm -rf /var/lib/apt/lists/*
ENV PKG_CONFIG_ALLOW_CROSS=1
RUN cargo build --target x86_64-unknown-linux-musl --release

FROM alpine:latest
EXPOSE 8080

RUN apk --no-cache add ca-certificates 

RUN mkdir frontend
RUN mkdir api

COPY --from=frontend-build . /frontend
COPY --from=builder . /api
WORKDIR /api

CMD ["./target/x86_64-unknown-linux-musl/release/personal-site"]
