import { useState, useEffect } from 'react'

import axios from 'axios'

export interface UserCountData {
  activeUsers: {
    Designer: number
    Model: number
  }
  designerCount: number
  modelCount: number
}

const getUserCount = async (): Promise<UserCountData> => {
  const res = await axios.get('https://meemong.com/un/count')
  return res.data
}

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
