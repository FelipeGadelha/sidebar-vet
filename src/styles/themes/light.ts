import colors from "../system/colors";
import design from "../system/design";
import device from "../system/device";

const light = {
  title: 'light',
  colors: {
    text: colors["gray-600"],
    bg: colors["gray-50"],
    panel: colors["gray-200"],
    ...colors
  },
  ...design,
  ...device,
}

export default light;