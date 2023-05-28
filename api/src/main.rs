use actix_web::{post, HttpRequest, HttpResponse, Responder, Result, web};
use actix_files::{Files, NamedFile};
use actix_cors::Cors;
use lettre::transport::smtp::authentication::Credentials;
use lettre::{Message, SmtpTransport, Transport};
use serde::Deserialize;
use std::env;
use std::path::PathBuf;


#[derive(Deserialize)]
struct SendEmail {
    name: String,
    email: String,
    message_type: String,
    message: String,
}

async fn index(_req: HttpRequest) -> Result<NamedFile> {
    let path: PathBuf = "../frontend/dist/index.html".parse().unwrap();
    Ok(NamedFile::open(path)?)
}

#[post("/submit-contact-form")]
async fn send_email(form: web::Json<SendEmail>) -> impl Responder {
    let email: Message = Message::builder()
    .from("Ben <ben@benlee.site>".parse().unwrap())
    .to("Ben <ben@benlee.site>".parse().unwrap())
    .reply_to(format!("<{}>", form.email).parse().unwrap())
    .subject(format!("{}: {}", &form.name, &form.message_type))
    .body(String::from(&form.message))
    .unwrap();

    let creds: Credentials = Credentials::new("ben@benlee.site".to_string(), env::var("EMAIL_PASSWORD").unwrap().to_string());

    let mailer: SmtpTransport = SmtpTransport::relay(&env::var("SMTP_SERVER").unwrap())
    .unwrap()
    .credentials(creds)
    .build();

    match mailer.send(&email) {
        Ok(_) => HttpResponse::Ok().finish(),
        Err(e) => panic!("Could not send email: {:?}", e),
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    use actix_web::{web, App, HttpServer};

    HttpServer::new(|| {
        let cors: Cors = Cors::permissive();
        App::new()
            .wrap(cors)
            .route("/", web::get().to(index))
            .route("/about", web::get().to(index))
            .route("/contact", web::get().to(index))
            .route("/project", web::get().to(index))
            .service(send_email)
            .service(Files::new("/", "../frontend/dist"))
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
