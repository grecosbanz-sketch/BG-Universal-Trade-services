const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/import-export.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'import-export.html'));
});
app.get('/e-commerce.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'e-commerce.html'));
});
app.get('/produit.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'produit.html'));
});
app.get('/produit-detail.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'produit-detail.html'));
});
app.get('/produit-detail-2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'produit-detail-2.html'));
});
app.get('/produit-detail-3.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'produit-detail-3.html'));
});

app.get('/produit-detail-3.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'produit-detail-3.html'));
});

app.get('/negoce-commerce.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'negoce-commerce.html'));
});
app.get('/multi-services.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'multi-services.html'));
});
app.get('/logistique-livraison.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'logistique-livraison.html'));
});
app.listen(PORT, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});





