const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const axios = require('axios');

async function downloadImage(postId, outputPath) {
    try {
        const response = await axios({
            method: 'GET',
            url: `https://instagram.com/p/${postId}/media/?size=l`,
            responseType: 'stream'
        });

        const writer = fs.createWriteStream(outputPath);

        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error('Error downloading image:', error);
        throw error;
    }
}

async function addTextAndOverlay(inputImagePath, ownerWallet, postId) {
    try {
        const inputImage = await loadImage(inputImagePath);
        const canvas = createCanvas(inputImage.width, inputImage.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(inputImage, 0, 0, inputImage.width, inputImage.height);
        ctx.font = '40px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(postId, 345, 162);
        ctx.fillText(ownerWallet, 615, 245);
        const overlayImagePathParts = postId.split('/');
        const overlayImageFileName = overlayImagePathParts[overlayImagePathParts.length - 1];
        const downloadedImagePath = `./posts/${overlayImageFileName}.jpg`;
        await downloadImage(postId, downloadedImagePath);
        const overlayImage = await loadImage(downloadedImagePath);
        ctx.drawImage(overlayImage, 860, 270, 950, 720);
        const out = fs.createWriteStream(`./nfts/${postId}.png`);
        const stream = canvas.createPNGStream();
        stream.pipe(out);
        out.on('finish', () => console.log('The image was saved successfully.'));
    } catch (err) {
        console.error('Error:', err);
    }
}