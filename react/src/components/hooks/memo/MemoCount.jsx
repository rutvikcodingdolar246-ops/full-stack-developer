import { memo, useRef, useEffect } from "react";

const Counts = () => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="mt-3 font-display text-center">
      <p>
        Nothing changed here but I’ve now rendered:
        <span className="text-red-600"> {renderCount.current} time(s)</span>
      </p>
    </div>
  );
};

export default memo(Counts);
