import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} _ Flipphoe`;
    }, [title])
}

export default useTitle;