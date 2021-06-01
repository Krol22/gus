import React from "react";

import "normalize.css"

import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import Layout from "./src/components/Layout";

export function wrapPageElement({element, props}) {
  return <Layout {...props}>{element}</Layout>
};
