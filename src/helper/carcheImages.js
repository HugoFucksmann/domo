export const cacheImages = async (arrImg) => {
  try {
    const promises = await arrImg.map((img) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = img;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
