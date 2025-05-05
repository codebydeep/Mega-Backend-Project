import Mailgen from "mailgen";
import nodemailer from "nodemailer"


const sendMail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://mailgen.js",
        },
    });

    var emailText = mailGenerator.generatePlaintext(options.mailGenContent);
    var emailHTML = mailGenerator.generate(options.mailGenContent);
    
    
    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS,
        },
    });

    const mail = {
        from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
        to: options.email,
        subject: options.subject,
        text: emailText, // plain text body;
        html: emailHTML, // html body;
    };

    try {
        await transporter.sendMail(mail);
    } catch (error) {
        console.log(`Email failed`, error);
    }
}


const emailVerificationMailGenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our App!, We are very excited to welcome you.",
            action: {
                instructions: "To get started with our App, please click here:",
                button: {
                    color: "22BC66", // Optional action button color, dependson you;
                    text: "Verify your Email",
                    link: verificationUrl,
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help you."
        },
    };  
}
const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: "We got a request to change your password!, We are very excited to welcome you.",
            action: {
                instructions: "To change the password, please click here:",
                button: {
                    color: "22BC66", // Optional action button color, dependson you;
                    text: "Reset your Password",
                    link: passwordResetUrl,
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help you."
        },
    };  
}


// sendMail({
//     email: user.email,
//     subject: "aaaa",
//     mailGenContent: emailVerificationMailGenContent(username, ``),
// });