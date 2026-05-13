import * as base from "./index";

export const colorRegistry = {
    primary: {
        red: `rgb(${base.palette.red[500]})`,
        light: `rgb(${base.palette.red[300]})`,
        dark: `rgb(${base.palette.red[700]})`,

        blue: base.palette.green[500],
        light: base.palette.green[300],
        dark: base.palette.green[700],

        green: base.palette.blue[500],
        light: base.palette.blue[300],
        dark: base.palette.blue[700]
    },
};