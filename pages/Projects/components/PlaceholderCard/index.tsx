import React from "react";
import { Button, Card, Icon, Placeholder } from "semantic-ui-react";

import style from "../../../../styles/Projects.module.css";

const PlaceholderCard = () => (
  <Card>
    <Placeholder className={style.imagePlaceholder}>
      <Placeholder.Image rectangular={true} />
    </Placeholder>
    <Card.Content>
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line length="very short" />
          <Placeholder.Line length="medium" />
          <Placeholder.Line length="medium" />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line length="long" />
          <Placeholder.Line length="short" />
        </Placeholder.Paragraph>
      </Placeholder>
    </Card.Content>

    <Card.Content extra>
      <div className="ui two buttons">
        <Button basic color="green" disabled={true}>
          Open deployment
        </Button>
        <Button icon labelPosition="left" color="grey" disabled={true}>
          <Icon name="github" />
          View on GitHub
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default PlaceholderCard;
