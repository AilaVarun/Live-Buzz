export const uploadToCloudinary = async (pics) => {
  if (pics) {
    try {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "instagram_clone");
      data.append("cloud_name", "dga2qihh6");

      const res = await fetch(`https://api.cloudinary.com/v1_1/dga2qihh6/image/upload`, {
        method: "post",
        body: data,
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        console.error("Cloudinary upload error:", errorData);
        throw new Error(`Upload failed: ${errorData.error?.message || 'Unknown error'}`);
      }

      const fileData = await res.json();
      console.log("Upload successful:", fileData);
      return fileData.url.toString();
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw error;
    }
  } else {
    console.log("No file provided");
    return null;
  }
};


