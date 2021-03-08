export const validateSave = (text) => {
  try {
    return JSON.parse(text) || {};
  } catch (err) {
    console.log("Save file text " + text + " is not parseable JSON");
    return {};
  }
};
