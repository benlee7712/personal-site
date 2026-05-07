FROM rust:1.88-alpine

RUN apk add --no-cache musl-dev gcc perl make

COPY . .

WORKDIR /api

RUN cargo build --release

EXPOSE 8080

CMD ["./target/release/personal-site"]
