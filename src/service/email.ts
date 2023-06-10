import nodemail from 'nodemailer';

export type EmailDateType = {
  email: string;
  subject: string;
  message: string;
};

export const transporter = nodemail.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.AUTH_USER, // generated ethereal user
    pass: process.env.AUTH_PASS, // generated ethereal password
  },
});

export function sendMail({ email, subject, message }: EmailDateType) {
  const data = {
    from: email,
    to: process.env.AUTH_USER,
    subject: subject,
    html: `<h1>${subject}</h1>
		<div>${message}</div>
		<br/>
		<p>보낸사람: ${email}</p>
		`,
  };
  return transporter.sendMail(data);
}
