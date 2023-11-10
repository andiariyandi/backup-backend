const express = require('express');
const {isToken} = require("../middlewares/token_validator");
const {
    detailKegiatan,
    listKegiatan,
    tambahKegiatan,
    ubahKegiatan,
    hapusKegiatan
} = require("../controller/kegiatan.controller");
const router = express.Router();
const multer = require('multer')
const upload = multer({
    dest: global.appRoot + '/files/bukti-kegiatan/'
})

router.get('/:id_kegiatan', isToken, detailKegiatan)
router.get('/', isToken, listKegiatan)
router.post('/', upload.single('file'), isToken, tambahKegiatan)
router.put('/:id_kegiatan', upload.single('file'), isToken, ubahKegiatan)
router.delete('/:id_kegiatan', isToken, hapusKegiatan)

module.exports = router;