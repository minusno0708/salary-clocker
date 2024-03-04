FROM rust:1.76.0

WORKDIR /app

RUN apt-get update && \
    cargo install wasm-pack

CMD ["wasm-pack", "build", "--target", "web"]