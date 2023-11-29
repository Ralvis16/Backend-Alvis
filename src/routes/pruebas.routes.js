import { Router } from 'express';
import { sendTicketMail } from '../utils/sendTicketMail.js';

const router = Router();

router.get("/test", async (req, res) => {
    await sendTicketMail()
    res.send("Correo enviado con éxito")
  })