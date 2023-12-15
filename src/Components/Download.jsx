export const handleDownload = () => {
  const downloadLink = document.createElement("a");
  downloadLink.href = process.env.PUBLIC_URL + "/Matheus-Carvalho-CV.pdf";
  downloadLink.download = "Matheus-Carvalho-CV.pdf";
  downloadLink.click();
};
