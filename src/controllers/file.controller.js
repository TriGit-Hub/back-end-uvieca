const ApiResponse = require("../responses/ApiResponse");
const DTO = require('../dto');
const Services = require('../services/index');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

var path = require('path');

const file = {}

file.getImg = async (req, res, next) => {
    try {
        const {imagen} = req.params;

        return res.sendFile(path.join(__dirname, `/../../public/uploads/img/${imagen}`));

        return res.status(200).json(ApiResponse(status, "Datos insertados con exito"));
    } catch (e) {
        next(e);
    }
};

file.obtenerPdfSolicitud = async (req, res, next) => {
    try {

        const url = path.join(__dirname, `/../../public/OoPdfFormExample.pdf`);
        const existingPdfBytes = fs.readFileSync(url);

        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        //cambiar desde aqui

        const form = pdfDoc.getForm();

        const field = form.getTextField("Given Name Text Box");
        field.setText("Prueba pito");

        //hasta aqui

        const pdfFinal = await pdfDoc.saveAsBase64();

        return res.status(200).json(ApiResponse(true, "PDF creado con exito", pdfFinal));
    } catch (e) {
        next(e);
    }
};

module.exports = file;
