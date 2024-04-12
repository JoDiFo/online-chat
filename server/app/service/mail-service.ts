import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import "dotenv/config";

class MailService {
  public transporter;

  constructor() {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;

    if (!(smtpHost && smtpPort && smtpUser && smtpPassword)) {
      throw new Error("smtp values are not defined");
    }

    const smtpConfig: SMTPTransport.Options = {
      host: smtpHost,
      port: Number(smtpPort),
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    };

    this.transporter = nodemailer.createTransport(smtpConfig);
  }

  async sendActivationMail(to: string, link: string) {
    const smtpUser = process.env.SMTP_USER;
    if (!smtpUser) {
      throw new Error("smtp user is not defined");
    }

    const apiUrl = process.env.API_URL;
    if (!apiUrl) {
      throw new Error("api url is not defined");
    }

    this.transporter.sendMail({
      from: smtpUser,
      to,
      subject: `Activate your account on ${apiUrl}`,
      text: "",
      html: `
      <div>
        <h1>Please click on that link to activate your account</h1>
        <a href="${link}">${link}</a>
      </div>
      `,
    });
  }
}

export default new MailService();
