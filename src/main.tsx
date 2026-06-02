import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const installDomMutationGuards = () => {
  if (typeof Node === "undefined" || !Node.prototype) return;

  const patched = Node.prototype as Node & { __vgDomGuardsInstalled?: boolean };
  if (patched.__vgDomGuardsInstalled) return;
  patched.__vgDomGuardsInstalled = true;

  const nativeRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    if (child.parentNode !== this) return child;
    return nativeRemoveChild.call(this, child) as T;
  };

  const nativeInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(node: T, child: Node | null): T {
    if (child && child.parentNode !== this) return node;
    return nativeInsertBefore.call(this, node, child) as T;
  };
};

installDomMutationGuards();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
