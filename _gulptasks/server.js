import { watch, series, parallel } from "gulp";
import bSync from "browser-sync";

import jsCore from "./core-js";
import jsTask from "./script";
import pugTask from "./html";
import cssCore from "./core-css";
import sassTask from "./css";
import { copyImage, copyData } from "./copy";
import { cleanImage, cleanData } from "./clean";

export const server = () => {
    bSync.init({
        notify: true,
        server: {
            baseDir: "dist"
        },
        port: 8000
    });

    watch(["src/js/*.js"], series(jsTask));

    watch(["src/**/**.pug"], series(pugTask));
    watch(["src/components/**/**.sass", "src/_util/**.sass"], series(sassTask));

    watch(
        ["src/img/**/**.{svg,png,jpg,speg,gif}"],
        series(cleanImage, copyImage)
    );
    watch(
        ["src/data/*.json"],
        series(cleanData, copyData)
    );

    watch(
        ["src/_plugins/**/**.css", "src/_plugins/**/**.js", "config.json"],
        parallel(jsCore, cssCore)
    );

    watch(["dist"]).on("change", bSync.reload);
};

module.exports = server;