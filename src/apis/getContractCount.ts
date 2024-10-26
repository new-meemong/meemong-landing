import axios from 'axios'

export interface ContractCountData {
  contractCount: number
}

const getContractCount = async (): Promise<ContractCountData> => {
  const res = await axios.get('https://meemong.com/un/contractCount')
  return res.data
}

export default getContractCount
