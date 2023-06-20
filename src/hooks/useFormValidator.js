import { useEffect } from "react";

export const useFormValidator = (objectClone, setEnableButton) => {
  useEffect(() => {
    const valores = Object.values(objectClone);
    const isEnable = valores.some((val) => val === false || val === "");
    if (isEnable) setEnableButton(false);
    else setEnableButton(true);
  }, [objectClone]);
};
