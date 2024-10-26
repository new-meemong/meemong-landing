import { useState, useEffect } from 'react'
import getUserCount, { UserCountData } from '@/apis/getUserCount'

const useUserCount = () => {
  const [userCount, setUserCount] = useState<UserCountData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        setIsLoading(true)
        const data = await getUserCount()
        setUserCount(data)
        setError(null)
      } catch (err) {
        console.error('Error fetching user count:', err)
        setError('사용자 수를 불러오는 데 실패했습니다.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserCount()
  }, [])

  return { userCount, isLoading, error }
}

export default useUserCount
