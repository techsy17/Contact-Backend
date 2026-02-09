import Contact from "../models/contactModel.js";

const getAllContact = async(req,res)=>{
    try {

        const getAll = await Contact.find();
        // if(!getAll){
            // return res.status(400).json({ message: "No Contacts Found, please add some contact!" });
        // }
        res.status(200).json(getAll);
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again!!", error: error.message });
    }
}

const addContact = async(req,res)=>{
    try {
        
        const {name,email,phone} = req.body;
        const addContact = await Contact.create(req.body);
        if(!addContact){
            return res.status(401).json({messgae: "Contact not added.."})
        }
        res.status(201).json(addContact);

    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again!!", error: error.message });
        
    }
}

const getContact = async(req,res)=>{
    try {
        const id = req.params.id;
        const getContact = await Contact.findById(id);
        if(!getContact){
            return res.status(400).json({ message: "Contact not found with these ID.." });
        }
        res.status(200).json(getContact);

    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again!!", error: error.message });
        
    }
}

const deleteContact = async(req,res)=>{
    try {
        
        const id = req.params.id;
        const removeContact = await Contact.findByIdAndDelete(id);
        if(!removeContact){
            return res.status(400).json({ message: "Contact is not deleted,Please try again!" });
        }
         res.status(200).json({ message: "Contact Deleted Successfully", deleteContact });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again!!", error: error.message });
        
    }
}

const updateContact = async(req,res)=>{
    try {
        
        const id = req.params.id;
        const updateContact = await Contact.findByIdAndUpdate(id,req.body);
         if (!updateContact) {
            return res.status(400).json({ message: "Contact not Updated, Please try again!" });
        }
        res.status(200).json({ message: "Contact Updated Successfully", updateContact });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again!!", error: error.message });
        
    }
}

export{getAllContact,addContact,getContact,deleteContact,updateContact};

