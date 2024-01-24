(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("#pdfViewer{width:var(--width);height:var(--height)}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent as i, computed as d, openBlock as n, createElementBlock as r, renderSlot as s, createElementVNode as h } from "vue";
const c = { id: "pdfViewer" }, p = /* @__PURE__ */ h("h1", null, " This is a ", -1), f = /* @__PURE__ */ i({
  __name: "PdfViewer",
  props: {
    width: { default: "100%" },
    height: { default: "1000px" }
  },
  setup(t) {
    const e = t;
    return d(() => ({
      "--width": e.width,
      "--height": e.height
    })), (o, l) => (n(), r("div", c, [
      p,
      s(o.$slots, "default")
    ]));
  }
});
export {
  f as PdfViewer
};
