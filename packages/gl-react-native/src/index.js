//@flow
import { View } from "react-native";
import { createSurface } from "gl-react";
import GLView from "@fooday/gl-react-expo/lib/GLViewNative";
import "@fooday/webgltexture-loader-expo";

const RenderLessElement = View;

export const Surface = createSurface({
  GLView,
  RenderLessElement,
  requestFrame: global.requestAnimationFrame,
  cancelFrame: global.cancelAnimationFrame,
});
