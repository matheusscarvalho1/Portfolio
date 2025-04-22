export const handleDownload = () => {
  const downloadLink = document.createElement("a");
  downloadLink.href =
    process.env.PUBLIC_URL + "/CV-MatheusCarvalho-DesenvolvedorFullStack.pdf";
  downloadLink.download = "CV-MatheusCarvalho-DesenvolvedorFullStack.pdf";
  downloadLink.click();
};
