import nodemailer, { Transporter } from "nodemailer"
import fs from 'fs'
import hbs from 'handlebars'

class SendMailService {
  private client: Transporter

  constructor() {
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "fd2e9b84d3bb8b",
        pass: "217af08c8a0ad2"
      }
    });

    this.client = transport
  }

  async execute(to: string, subject: string, variables: object, path: string) {
    const templateFileContent = fs.readFileSync(path).toString("utf-8")

    const mailTemplateParse = hbs.compile(templateFileContent)

    const html = mailTemplateParse(variables)

    await this.client.sendMail({
      to,
      subject,
      html,
      from: "NPS  <noreplay@nps.com.br>"
    })
  }
}

export default new SendMailService()
