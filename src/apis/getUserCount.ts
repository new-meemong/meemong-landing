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

export default getUserCount
