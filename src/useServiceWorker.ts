import { useEffect, useState } from 'react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const useServiceWorker = () => {
  const [showWarning, setShowWarning] = useState(false)
  const [swRegistration, setSwRegistration] = useState<ServiceWorkerRegistration | null>()

  const onUpdate = (registration: ServiceWorkerRegistration) => {
    console.log({registration}, 'tem update')
    setSwRegistration(registration)
    setShowWarning(true)
  }

  useEffect(() => {
    serviceWorkerRegistration.register({ onUpdate })
  }, [])

  useEffect(() => {
    console.log('entrando no effect do registration man...')
    if (!swRegistration) return

    setInterval(() => {
      console.log('upadting...')
      swRegistration.update()
    }, 1000)

  }, [swRegistration])

  return { showWarning }
}

export default useServiceWorker