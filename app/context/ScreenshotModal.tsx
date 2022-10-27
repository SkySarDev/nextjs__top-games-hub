import {
  FC,
  createContext,
  PropsWithChildren,
  useState,
  useContext,
} from 'react'

interface IShowModalArgs {
  image: string
  alt: string
}

interface IScreenshotModalState extends IShowModalArgs {
  isShow: boolean
}

interface IScreenshotModalContext {
  modalState: IScreenshotModalState
  showModal: (value: IShowModalArgs) => void
  hideModal: () => void
}

const defaultModalState = {
  isShow: false,
  image: '',
  alt: '',
}

const ScreenshotModalContext = createContext<IScreenshotModalContext | null>(
  null
)

export const ScreenshotModalProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [modalState, setModalState] =
    useState<IScreenshotModalState>(defaultModalState)

  const showModal = ({ image, alt }: IShowModalArgs) => {
    document.body.style.overflowY = 'hidden'

    setModalState({
      isShow: true,
      image,
      alt,
    })
  }

  const hideModal = () => {
    document.body.style.overflowY = ''

    setModalState(defaultModalState)
  }

  const value = {
    modalState,
    showModal,
    hideModal,
  }

  return (
    <ScreenshotModalContext.Provider value={value}>
      {children}
    </ScreenshotModalContext.Provider>
  )
}

export const useScreenshotModal = () =>
  useContext(ScreenshotModalContext) as IScreenshotModalContext
