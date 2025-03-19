import { un } from '@uni-helper/uni-network'
import {
  requestErrorInterceptor,
  requestInterceptor,
  responseErrorInterceptor,
  responseInterceptor,
} from './interceptors'

const instance = un.create({
  baseUrl: import.meta.env.VITE_BASEURL,
  timeout: 1000,
})

instance.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
instance.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor,
)

export { instance }
