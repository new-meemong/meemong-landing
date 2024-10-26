import { useState, useEffect } from 'react'
import getContractCount, { ContractCountData } from '@/apis/getContractCount'

const useContractCount = () => {
  const [contractCount, setContractCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContractCount = async () => {
      try {
        setIsLoading(true)
        const data: ContractCountData = await getContractCount()
        setContractCount(data.contractCount)
        setError(null)
      } catch (err) {
        console.error('Error fetching contract count:', err)
        setError('계약 수를 불러오는 데 실패했습니다.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchContractCount()
  }, [])

  return { contractCount, isLoading, error }
}

export default useContractCount
