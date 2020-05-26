
  const nodemailer = require('nodemailer');
  
  let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth:{
          user: "pi.d2gl@gmail.com",
          pass: "ddgl9900"

      }

  });

  transporter.sendMail({
      from: "SICANA<pi.d2gl@gmail.com>",
      to: "lucasmsilva@unipam.edu.br,lucasmsilva_022@outlook.com",
      subject: "Alerta",
      text: "Funcionario: Lucas",
      html: "<h1>"+ "Alerta"+"</h1>"+"<b>"+"Funcionário: Lucas"+"</b>" + "<br>" +"<b>"+"Fazenda: Fazenda 1"+"<br>"+"</b>"+ "<b>"+"Descrição:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis amet inventore ex beatae et saepe iure, asperiores laudantium consectetur tenetur doloremque ut dicta dolor ducimus similique aliquam optio. Architecto, molestias? "+"</b>"
  }).then(message =>{
      console.log(message);
  }).catch(err => {
      console.log(err);
      
  });

  
