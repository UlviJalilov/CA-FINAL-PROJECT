import express from 'express';
import multer from 'multer';
import cloudinary from '../utils/cloudinary.js';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const b64 = Buffer.from(req.file!.buffer).toString('base64');
        const dataURI = `data:${req.file!.mimetype};base64,${b64}`;

        const result = await cloudinary.uploader.upload(dataURI, {
            folder: 'final-products', // istəyə görə
        });

        res.status(200).json({ url: result.secure_url });
    } catch (error) {
        res.status(500).json({ message: 'Upload failed', error });
    }
});

export default router;
