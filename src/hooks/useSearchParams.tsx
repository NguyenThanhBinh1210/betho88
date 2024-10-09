import { useLocation, useNavigate } from 'react-router-dom'

function useSearchParam() {
  const navigate = useNavigate()
  const location = useLocation()

  // Lấy giá trị của một tham số truy vấn
  const getParam = (key: string): string | null => {
    const params = new URLSearchParams(location.search)
    return params.get(key)
  }

  // Cập nhật giá trị của một tham số truy vấn
  const setParam = (key: string, value: string): void => {
    const params = new URLSearchParams(location.search)
    params.set(key, value)
    navigate(`${location.pathname}?${params.toString()}`, { replace: true })
  }

  // Xóa một tham số truy vấn
  const removeParam = (key: string): void => {
    const params = new URLSearchParams(location.search)
    params.delete(key)
    navigate(`${location.pathname}?${params.toString()}`, { replace: true })
  }

  return { getParam, setParam, removeParam }
}

export default useSearchParam
