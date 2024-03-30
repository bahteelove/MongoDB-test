const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json( contacts );
});

//@desc create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async(req, res) => {
    console.log( "the request body is :", req.body );
    const {name, email, phone} = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("all fields are mandatory");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
    });

    res.status(201).json( contact );
})

//@desc get a contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async(req, res) => {
    res.status(200).json( { message: `get a contact: ${req.params.id}` } )
})

//@desc update a contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json( { message: `update a contact: ${req.params.id}` } )
})

//@desc delete a contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json( { message: `delete a contact: ${req.params.id}` } )
})


module.exports = {
    getContact,
    createContact,
    updateContact,
    deleteContact,
    getContacts
};