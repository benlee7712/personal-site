FROM rust:1.67

COPY . .

WORKDIR /api
RUN apt-get update && apt-get -y install ca-certificates cmake musl-tools libssl-dev && rm -rf /var/lib/apt/lists/*
RUN rustup target add x86_64-unknown-linux-musl
ENV PKG_CONFIG_ALLOW_CROSS=1

RUN cargo build --target x86_64-unknown-linux-musl --release
WORKDIR /..

EXPOSE 8080

WORKDIR /api

CMD ["./target/x86_64-unknown-linux-musl/release/personal-site"]
