function Container(props) {
  const { children } = props;
  return (
    <div className="max-w-[1440px] px-0 md:px-[50px] mx-auto">{children}</div>
  );
}

export default Container;
