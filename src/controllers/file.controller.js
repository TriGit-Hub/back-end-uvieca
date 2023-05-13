const ApiResponse = require("../responses/ApiResponse");
const DTO = require('../dto');
const Services = require('../services/index');
const {PDFDocument} = require('pdf-lib');
const fs = require('fs');

var path = require('path');

const file = {}

file.getImg = async (req, res, next) => {
    try {
        const {imagen} = req.params;

        return res.sendFile(path.join(__dirname, `/../public/uploads/img/${imagen}`));

        return res.status(200).json(ApiResponse(status, "Datos insertados con exito"));
    } catch (e) {
        next(e);
    }
};

file.obtenerPdfSolicitud = async (req, res, next) => {
    try {

        const url = path.join(__dirname, `/../public/solimod.pdf`);
        const existingPdfBytes = fs.readFileSync(url);

        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        const form = pdfDoc.getForm();

        Object.keys(req.body).forEach((element) => {
            const field = form.getTextField(element)
            field.setText(req.body[element])
        })

        const pdfFinal = await pdfDoc.saveAsBase64();

        return res.status(200).json(ApiResponse(true, "PDF creado con exito", pdfFinal));
    } catch (e) {
        next(e);
        return res.status(507).json(ApiResponse(true, "trono",e));
    }
};

module.exports = file;
