FROM rust:1.60-alpine as builder

COPY . .
WORKDIR /api

RUN rustup target add x86_64-unknown-linux-musl
RUN apk add --no-cache musl-dev
ENV PKG_CONFIG_ALLOW_CROSS=1
RUN cargo build --release

FROM alpine:latest
EXPOSE 8080
COPY --from=builder /api/target/release/personal-site .
CMD ["./personal-site"]
