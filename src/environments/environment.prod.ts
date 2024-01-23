import { commonEnvironment } from "./environment.common";

const env = {
    production: true,
    development: false
};
export const environment = { ...commonEnvironment, ...env };