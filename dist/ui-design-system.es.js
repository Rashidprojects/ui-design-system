import { jsx as e } from "react/jsx-runtime";
import { StrictMode as c } from "react";
import l from "react-dom";
var o, r = l;
if (process.env.NODE_ENV === "production")
  o = r.createRoot, r.hydrateRoot;
else {
  var i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  o = function(t, n) {
    i.usingClientEntryPoint = !0;
    try {
      return r.createRoot(t, n);
    } finally {
      i.usingClientEntryPoint = !1;
    }
  };
}
const a = ({ label: t, onClick: n }) => /* @__PURE__ */ e(
  "button",
  {
    onClick: n,
    className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
    children: t
  }
), s = () => /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-screen bg-gray-100", children: /* @__PURE__ */ e(a, { label: "Click Me", onClick: () => {
  alert("Button clicked!");
} }) });
o(document.getElementById("root")).render(
  /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(s, {}) })
);
