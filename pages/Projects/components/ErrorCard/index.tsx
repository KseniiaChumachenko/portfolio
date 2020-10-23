import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";

const ErrorCard = () => (
  <Segment color={"red"} size={"huge"}>
    <Header icon>
      <Icon name="github" />
      Seems like Git-hub API is currently not available :(
    </Header>
  </Segment>
);

export default ErrorCard;
