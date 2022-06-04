import { message } from "antd";

const Validate = (data) => {
  // DATA VALIDATION OBJECT

  let rs = true;

  if (!data.name.length) {
    message.warning("Name is required");
    return false;
  }

  if (!data.email.length) {
    message.warning("Email is required");
    return false;
  }

  if (!data.country) {
    message.warning("Country is required");
    return false;
  }

  if (!data.phone) {
    message.warning("Phone is required");
    return false;
  }

  if (!data.date) {
    message.warning("Date is required");
    return false;
  }

  return rs;
};

export default Validate;
