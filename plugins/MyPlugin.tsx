import * as React from "react";
import { createSvcDef } from "@svc-pool/core";
import Registry from "./Registry";

let MyPlugin: React.FC = function MyPlugin() {
  return <div>My plugin</div>;
};

const def = createSvcDef<Registry>("app", () => MyPlugin);

export default def;
