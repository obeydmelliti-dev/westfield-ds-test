import figma from "@figma/code-connect";
import { Button } from "./Button";

figma.connect(
  Button,
  "https://www.figma.com/design/Dty6BLOKwvt0ar1kMYEJWX/Core-Components-VF.1?node-id=2311-26545",
  {
    props: {
      children: figma.string("Label"),
      disabled: figma.boolean("Disabled"),
      variant: figma.enum("Type", {
        Primary: "primary",
        Secondary: "secondary",
      }),
    },
    example: ({ children, disabled, variant }) => (
      <Button variant={variant} disabled={disabled}>
        {children}
      </Button>
    ),
  }
);
