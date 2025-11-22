import { useEffect, useRef } from "react";

interface ScrollAnchorProps {
  /** Trigger scroll when this dependency changes */
  deps: unknown[];
  behavior?: ScrollBehavior; // "smooth" | "auto"
}

export default function ScrollAnchor({ deps, behavior = "smooth" }: ScrollAnchorProps) {
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    anchorRef.current?.scrollIntoView({ behavior });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, behavior]); // ✅ combine deps + behavior into a literal array

  return <div ref={anchorRef} />;
}
