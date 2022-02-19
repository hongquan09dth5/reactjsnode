import agent from "./../../api/agent";

export const updateSingleProductImage = async (files: any) => {
  try {
    const formData = new FormData();
    formData.append("file", files[0].originFileObj);
    return await agent.Uploader.upload(formData);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
