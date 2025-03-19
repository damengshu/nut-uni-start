import type { ToastInst } from 'nutui-uniapp'
import type ToastManager from './layouts/default/ToastManager'

declare global {
  interface Uni extends UniNamespace.Uni {
    $toast: ToastManager
  }

  function useToast(): ToastInst
}

export {}
