import colors from "../system/colors";
import design from "../system/design";
import device from "../system/device";

const dark = {
  title: 'dark',
  colors: {
    text: colors["gray-50"],
    bg: colors["gray-900"],
    panel: colors["gray-800"],
    ...colors
  },
  ...design,
  ...device,
}

export default dark;