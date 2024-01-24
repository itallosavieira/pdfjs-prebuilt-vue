exports.PdfjsIframe = (pdfBlob) => {
  return `
    <iframe 
      src="./pdfjs/web/viewer.html?file=${pdfBlob}" 
      width="100%"
      height="1000px">
    </iframe>`;
}