FROM rust:1.69

COPY . .

WORKDIR /api
RUN apt-get update && apt-get -y install ca-certificates cmake pkg-config musl-tools libssl-dev
RUN rustup target add x86_64-unknown-linux-musl
ENV PKG_CONFIG_ALLOW_CROSS=1

RUN cargo build --target x86_64-unknown-linux-musl --release
WORKDIR /..

EXPOSE 8080

WORKDIR /api

CMD ["./target/x86_64-unknown-linux-musl/release/personal-site"]
