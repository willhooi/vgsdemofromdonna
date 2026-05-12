import { useEffect } from "react";

const SUFFIX = "VietGuys | Enterprise Messaging Vietnam";

export function useDocumentTitle(topic: string) {
  useEffect(() => {
    document.title = `${topic} — ${SUFFIX}`;
  }, [topic]);
}
