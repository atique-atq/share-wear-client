import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Share Wear`;
    }, [title])
};

export default useTitle;