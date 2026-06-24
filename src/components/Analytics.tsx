import { useEffect } from "react";
import { PLAUSIBLE_SCRIPT_ID } from "../config/analytics";

export default function Analytics() {
  useEffect(() => {
    const scriptSrc = `https://plausible.io/js/${PLAUSIBLE_SCRIPT_ID}.js`;
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = scriptSrc;
    document.head.appendChild(script);

    const init = document.createElement("script");
    init.textContent =
      "window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init();";
    document.head.appendChild(init);
  }, []);

  return null;
}
