import { useEffect, useState } from "react"

const useSeller = (email, verified = false) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isVerified, setVerified] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller);
                    console.log('data is--', data);
                    setVerified(data.isVerified)
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading, isVerified]
}

export default useSeller;