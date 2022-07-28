use actix_web::{HttpRequest, Result};
use actix_files::{Files, NamedFile};
use std::path::PathBuf;

async fn index(_req: HttpRequest) -> Result<NamedFile> {
    let path: PathBuf = "../frontend/dist/index.html".parse().unwrap();
    Ok(NamedFile::open(path)?)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    use actix_web::{web, App, HttpServer};

    HttpServer::new(|| App::new()
        .route("/", web::get().to(index))
        .service(Files::new("/", "../frontend/dist")))
            .bind("0.0.0.0:8080")?
            .run()
            .await
}
