import { useState } from "react";

export const useHelpers = () => {
  const [disabled, setDisabled] = useState(false);
  const [selected, setSelected] = useState<any>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  function trimString(str: string, limit = 22) {
    if (!str) return;
    return str.length <= limit ? str : `${str.slice(0, limit)}...`;
  }

  return {
    disabled, selected, loading,
    setDisabled, setSelected, setLoading,
    trimString
  };
};
