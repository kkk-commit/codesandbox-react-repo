export const ColoredMessage = (props) => {
  const { color, children } = props;

  const contentStyle = {
    color,
    fronSize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
};
