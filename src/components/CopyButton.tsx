import { useState } from "react";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";

const CopyButton = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard
      .writeText(value)
      .then(() => setCopied(true))
      .then(() => setTimeout(() => setCopied(false), 1000))
      .catch(() => setCopied(false));
  }

  return (
    <Button variant="icon" size="icon" onClick={copy}>
      <Icon
        type={copied ? "tick" : "copy"}
        size="sm"
        color={copied ? "main" : "light"}
        noHover={copied}
      />
    </Button>
  );
};

export { CopyButton };
