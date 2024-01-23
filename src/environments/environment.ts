import { commonEnvironment } from "./environment.common";

const env = {
    production: false,
    development: true
};
export const environment = { ...commonEnvironment, ...env };