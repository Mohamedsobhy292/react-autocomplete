import { useEffect } from 'react'

const useScrollToSelectedElement = (ListContainer, pointer, suggestions) => {
    useEffect(() => {
        const children = ListContainer.current?.children
        let top = []
        if (children) {
            const options = [...ListContainer.current?.children]
            top = options.map((option) => option.offsetTop)
        }

        if (
            top[pointer] &&
            top[pointer] >
                ListContainer.current.scrollTop +
                    (ListContainer.current.getBoundingClientRect().height - 20)
        ) {
            ListContainer.current.scrollTop += 180
        }
    }, [suggestions, pointer, ListContainer])
}

export { useScrollToSelectedElement }
