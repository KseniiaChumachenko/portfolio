import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { ButtonProps } from "semantic-ui-react/dist/commonjs/elements/Button/Button";

interface P {
  onGitHubLinkClick(
    event: React.MouseEvent<HTMLButtonElement>,
    data: ButtonProps
  ): void;
  onLinkedInLinkClick(
    event: React.MouseEvent<HTMLButtonElement>,
    data: ButtonProps
  ): void;
  onFacebookLinkClick(
    event: React.MouseEvent<HTMLButtonElement>,
    data: ButtonProps
  ): void;
  onEmailFormClick(
    event: React.MouseEvent<HTMLButtonElement>,
    data: ButtonProps
  ): void;
  className?: string;
}

const SocialButtons = ({
  onGitHubLinkClick,
  onLinkedInLinkClick,
  onFacebookLinkClick,
  onEmailFormClick,
  className,
}: P) => (
  <Button.Group className={className}>
    <Button onClick={onGitHubLinkClick} icon={"github"} />
    <Button onClick={onLinkedInLinkClick} icon={"linkedin"} />
    <Button onClick={onFacebookLinkClick} icon={"facebook messenger"} />
    <Button onClick={onEmailFormClick} icon={"envelope outline"} />
  </Button.Group>
);

export default SocialButtons;
