"use client";

import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export function InlineFormula({ formula }: { formula: string }) {
  return <InlineMath math={formula} />;
}

export function BlockFormula({ formula }: { formula: string }) {
  return (
    <div className="my-6 overflow-x-auto bg-slate-900 rounded-xl p-4 border border-slate-800">
      <BlockMath math={formula} />
    </div>
  );
}
