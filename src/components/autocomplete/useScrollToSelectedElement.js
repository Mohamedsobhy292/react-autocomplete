import { useEffect } from 'react'

const useScrollToSelectedElement = (inputEl, pointer, suggestions) => {
    useEffect(() => {
        const children = inputEl.current?.children
        let top = []
        if (children) {
            const options = [...inputEl.current?.children]
            top = options.map((option) => option.offsetTop)
        }

        if (
            top[pointer] &&
            top[pointer] >
                inputEl.current.scrollTop +
                    (inputEl.current.getBoundingClientRect().height - 20)
        ) {
            inputEl.current.scrollTop += 160
        }
    }, [suggestions, pointer, inputEl])
}

export { useScrollToSelectedElement }
