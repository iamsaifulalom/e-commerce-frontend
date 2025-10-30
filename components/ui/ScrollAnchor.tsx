import { useEffect, useRef } from "react";

interface ScrollAnchorProps {
  /** Trigger scroll when this dependency changes */
  deps: any[];
  behavior?: ScrollBehavior; // "smooth" | "auto"
}

export default function ScrollAnchor({ deps, behavior = "smooth" }: ScrollAnchorProps) {
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    anchorRef.current?.scrollIntoView({ behavior });
  }, deps);

  return <div ref={anchorRef} />;
}
