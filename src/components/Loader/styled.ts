import { css, keyframes, styled } from "~/theme";

const spin = keyframes({
  from: {
    transform: "translateY(-50%) rotate(0deg)",
  },

  to: {
    transform: "translateY(-50%) rotate(360deg)",
  },
});

export const StyledContent = styled("div")(
  ({ theme: { colors, rem } }) => ({
    borderRadius: "50%",
    border: `${rem(10)} solid ${colors.orange}`,
    borderTopColor: "transparent",
    height: rem(60),
    left: 0,
    marginInline: "auto",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: rem(60),
  }),
  css`
    animation: ${spin} 0.5s linear infinite;
  `
);
