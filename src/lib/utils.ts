export const handleDownloadImage = (imageUrl: string, filename: string) => {
    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        })
        .catch(err => {
            console.error("Error downloading image:", err);
            // Fallback: open in new tab if cross-origin download fails
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = filename;
            link.target = "_blank";
            document.body.appendChild(link);
            link.click();
            link.remove();
        });
};
