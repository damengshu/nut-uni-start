import type { ToastInst, ToastOptions } from 'nutui-uniapp'
import PagesManager from './PagesManager'

export default class ToastManager {
  public static async instance(): Promise<ToastInst | null> {
    return (
      (await PagesManager.requireStackTopPage())?.$vm?.$magic?.toast?.value
      ?? null
    )
  }

  public static async text(
    message: string,
    options?: ToastOptions,
  ): Promise<void> {
    const instance: ToastInst | null = await ToastManager.instance()

    instance?.text(message, options)
  }

  public static async success(
    message: string,
    options?: ToastOptions,
  ): Promise<void> {
    const instance: ToastInst | null = await ToastManager.instance()

    instance?.success(message, options)
  }
}
