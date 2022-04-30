use actix_files::NamedFile;
use actix_web::{HttpRequest, Result};
use std::path::PathBuf;

/// https://actix.rs/docs/static-files/
async fn index(_req: HttpRequest) -> Result<NamedFile> {
    let path: PathBuf = "./files/index.html".parse().unwrap();
    Ok(NamedFile::open(path)?)
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    use actix_web::{web, App, HttpServer};

    HttpServer::new(|| App::new().route("/", web::get().to(index)))
        .bind("127.0.0.1:8088")?
        .run()
        .await
}
