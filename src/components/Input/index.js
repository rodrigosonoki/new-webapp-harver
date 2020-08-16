import React from "react";

//STYLES
import { Input } from "./styles";

export default function InputField({ label, name, width, ...rest }) {
  return <Input type="text" name={name} width={width} {...rest} />;
}
