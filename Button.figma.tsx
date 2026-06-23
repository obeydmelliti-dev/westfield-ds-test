import figma from "@figma/code-connect";
import { Button } from "./Button";

figma.connect(
  Button,
  "https://www.figma.com/design/Dty6BLOKwvt0ar1kMYEJWX/Core-Components-VF.1?node-id=2311-26545",
  {
    props: {
      variant: figma.enum("type", {
        Primary: "primary",
        Secondary: "secondary",
      }),
      disabled: figma.enum("state", {
        Disabled: true,
        Default: false,
      }),
    },
    example: ({ variant, disabled }) => (
      <Button variant={variant} disabled={disabled}>
        Button
      </Button>
    ),
  }
);