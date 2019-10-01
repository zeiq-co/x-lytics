import nodemailer from 'nodemailer';

const sendEmail = async (event, context, callback) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Max-Age': '2592000',
    'Access-Control-Allow-Credentials': 'true',
  };

  if (event.httpMethod === 'OPTIONS') {
    callback(null, {
      statusCode: 204,
      headers,
      body: {},
    });
    return;
  }

  if (event.httpMethod !== 'POST') {
    callback(null, { statusCode: 405, body: 'Method Not Allowed' });
  }

  const parsedBody = event.body ? JSON.parse(event.body) : {};

  // some validation
  if (
    event.httpMethod !== 'POST' ||
    !parsedBody.name ||
    !parsedBody.email ||
    !parsedBody.message
  ) {
    callback(null, {
      headers,
      statusCode: 400,
      body: 'Required fields are not filled',
    });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
      user: process.env.MAILGUN_USER,
      pass: process.env.MAILGUN_PASS,
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    // const info =
    from: `Xlytics <info@xlytics.com>`,
    to: 'info@xlytics.com',
    subject: 'New contact form submission',
    text: event.body,
  });

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  callback(null, {
    headers,
    statusCode: 200,
    body: 'Email sent!',
  });
};

exports.handler = sendEmail;
