exports.PdfjsIframe = (pdfBlob) => {
  const currentScriptUrl = new URL(import.meta.url);
  const basePath = new URL('./pdfjs/web/viewer.html', currentScriptUrl).hre
  return `
    <iframe 
      src="${basePath}?file=${pdfBlob}" 
      width="100%"
      height="1000px">
    </iframe>`;
}