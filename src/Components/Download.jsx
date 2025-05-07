export const handleDownload = () => {
  const downloadLink = document.createElement("a");
  downloadLink.href =
    process.env.PUBLIC_URL + "CV-MatheusCarvalho-Desenvolvedor-Front-End.pdf";
  downloadLink.download = "CV-MatheusCarvalho-Desenvolvedor-Front-End.pdf";
  downloadLink.click();
};
