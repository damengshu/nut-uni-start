import type { Inst as PageInst } from '@/layouts/types'

export interface MagicPageInstance extends Page.PageInstance {
  $magic: PageInst
}

export default class PagesManager {
  public static getStackTopPage(): MagicPageInstance | null {
    const page: Page.PageInstance | null = last(getCurrentPages()) ?? null

    if (page == null) {
      return null
    }

    return Object.assign({}, page, {
      $magic: page.$vm?.$magic,
    })
  }

  public static async requireStackTopPage(): Promise<MagicPageInstance | null> {
    const page: MagicPageInstance | null = PagesManager.getStackTopPage()

    if (page != null) {
      return page
    }

    await sleep(1)

    return PagesManager.getStackTopPage()
  }
}

export function sleep(timeout: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

function last(
  pages: Page.PageInstance<AnyObject, object>[],
): Page.PageInstance<any, any> | null {
  if (pages.length === 0) {
    return null
  }
  return pages[pages.length - 1]
}
