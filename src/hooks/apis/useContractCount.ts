import { useState, useEffect } from 'react'
import axios from 'axios'

interface ContractCountData {
  contractCount: number
}

const getContractCount = async (): Promise<ContractCountData> => {
  const res = await axios.get('https://meemong.com/un/contractCount')
  return res.data
}

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
