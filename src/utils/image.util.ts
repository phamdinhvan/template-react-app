import { BASE_LINK_IMAGE } from "@Const";

class ImageUtils {
  buildProductCategoryImgSrc = (img: string | undefined | null): string | undefined => {
    return img ? `${BASE_LINK_IMAGE}/${img}` : undefined;
  };
}

export const ImageUtil = new ImageUtils();
