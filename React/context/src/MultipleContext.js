import { ThemeContext, UserConsumer } from "./Context";

function MultipleContext() {
  return (
    <ThemeContext.Consumer>
      {(color) => (
        <UserConsumer>
          {(username) => (
            <div style={{ backgroundColor: color }}>
              This is {color} theme and username is {username}
            </div>
          )}
        </UserConsumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default MultipleContext;
