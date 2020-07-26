import React, { useState } from "react";

export function NewCheckbox({ val }) {
  const [check, setCheck] = useState(true);
  return (
    <div className={check ? "newCheckBox" : "newCheckBoxChecked"}>
      <input
        checked={check}
        type="checkbox"
        name={val}
        value={val}
        className="checkDetail"
        onClick={() => setCheck((prev) => !prev)}
      />
    </div>
  );
}
