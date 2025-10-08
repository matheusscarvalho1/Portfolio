export const handleDownload = () => {
  const downloadLink = document.createElement("a");
  downloadLink.href =
    process.env.PUBLIC_URL + "CV_Matheus_Carvalho_Desenvolvedor_Front_End_2025.pdf";
  downloadLink.download = "CV_Matheus_Carvalho_Desenvolvedor_Front_End_2025.pdf";
  downloadLink.click();
};
