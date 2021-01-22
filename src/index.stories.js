import "@lwc/synthetic-shadow";
import "https://unpkg.com/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";

import { createElement} from "lwc";
import main from "c/basic";

export const basic = () => createElement("c-basic", { is: main });
