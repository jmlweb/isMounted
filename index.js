"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

const useIsMounted = () => {
  const isMounted = (0, _react.useRef)(false);
  (0, _react.useEffect)(() => {
    isMounted.current = true;
    return () => isMounted.current = false;
  }, []);
  return isMounted;
};

var _default = useIsMounted;
exports.default = _default;
