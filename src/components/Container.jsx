function Container(props) {
  const { children } = props;
  return <div className="max-w-[1440px] px-[50px] mx-auto">{children}</div>;
}

export default Container;
