import { getPlaiceholder } from 'plaiceholder'

import { IBgImage } from '@appTypes/base.types'
import {
  DEFAULT_HEADER_IMAGE,
  DEFAULT_HEADER_BLUR_DATA_URL,
} from '@constants/common.constants'

export const getBgImage = async (
  bgImage: string | null | undefined
): Promise<IBgImage> => {
  let image = bgImage || DEFAULT_HEADER_IMAGE
  let blurDataURL = DEFAULT_HEADER_BLUR_DATA_URL

  if (bgImage) {
    getPlaiceholder(bgImage, { size: 10 }).then(({ base64 }) => {
      blurDataURL = base64
    })
  }

  return {
    image,
    blurDataURL,
  }
}
