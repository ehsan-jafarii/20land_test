import React, { forwardRef, ForwardRefRenderFunction } from "react";

const Text = ({ children, className, ...props }, ref) => {
  return (
    <p ref={ref} className={className} {...props}>
      {children}
    </p>
  );
};

Text.displayName = "Text";

export default forwardRef(Text);
