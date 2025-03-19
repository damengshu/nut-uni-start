import type { UnConfig, UnData } from '@uni-helper/uni-network/index'
import ToastManager from '@/utils/toastUtil/ToastManager'

export function requestInterceptor(
  config: UnConfig<UnData, UnData>,
): UnConfig<UnData, UnData> {
  // interceptor logic

  return config
}

export function requestErrorInterceptor(error: any): Promise<any> {
  // interceptor logic
  return Promise.reject(error)
}

export function responseInterceptor(response: any): any {
  // interceptor logic
  return response
}

export function responseErrorInterceptor(error: any): Promise<any> {
  // interceptor logic
  if (error.message === 'request:fail timeout') {
    ToastManager.error('请求超时')
  }
  return Promise.reject(error)
}
