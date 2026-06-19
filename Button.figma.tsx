import figma from "@figma/code-connect";
import { Button } from "./Button";

figma.connect(
  Button,
  "COLLE_ICI_L_URL_DU_COMPOSANT_FIGMA",
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
  },
);
