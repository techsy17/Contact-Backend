import express from 'express';
import { addContact, deleteContact, getAllContact, getContact, updateContact } from '../controller/contactController.js';

const router = express.Router();

router.get('/contacts',getAllContact)
router.post('/add',addContact);
router.get('/contact/:id',getContact);
router.delete('/contact/:id',deleteContact);
router.put('/contact/:id',updateContact);


export default router;