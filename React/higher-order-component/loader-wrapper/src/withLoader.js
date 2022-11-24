function withLoader(Component) {
  return function withLoaderComponent(props) {
    console.log(props);
    return !props.isLoading ? (
      <Component {...props} />
    ) : (
      <p>Wait, Data is loading</p>
    );
  };
}

export default withLoader;
