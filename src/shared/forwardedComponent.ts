import React from "react";

export interface IForwardedComponent {
  component: React.ElementType;
}
/**
 * Returns an instance the component passed into the `component` prop along with any props
 */
const ForwardedComponent: React.FC<IForwardedComponent> = ({
  component,
  ...rest
}) => React.createElement(component, rest);

export default ForwardedComponent;
