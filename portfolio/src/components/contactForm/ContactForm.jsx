import './contactForm.css';
import React from 'react';
export function ContactForm() {
  
  return (

    <form id="fs-frm" name="complaint-form" accept-charset="utf-8" action="https://formspree.io/f/xbjnlwww" method="post">
        <fieldset id="fs-frm-inputs">
            <label for="full-name">Nombre completo</label>
            <input type="text" name="name" id="full-name" placeholder="Nombre y apellidos" required=""/>

            <label for="email-address">Correo electronico</label>
            <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""/>

            <label for="telephone">Numero de telefono (Opcional)</label>
            <input type="number" name="telephone" id="telephone" placeholder="(+34) 123-456-789"/>

            <label for="complaint">Mensaje</label>
            <textarea rows="6" name="complaint" id="complaint" placeholder="Escribe tu mensaje!" required=""></textarea>
            <input type="hidden" name="_subject" id="email-subject" value="Complaint Form Submission"></input>

        </fieldset>
        <input type="submit" value="Enviar"/>
    </form>
  );
}
