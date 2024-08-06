document.getElementById('download-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1FEjaFhlFMISowmNrWMDeJ3bWMWLg60JJ';
    link.download = 'sample.pdf';
    link.click();
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('thank-you').style.display = 'block';
});
