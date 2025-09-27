// composables/useApi.ts
export const useApi = () => {
  const baseUrl = '/' // todo : .env

  const request = async (endpoint: string, options: any = {}) => {
    try {
      return await $fetch(`${baseUrl}${endpoint}`, options)
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }

  const get = (endpoint: string, params?: any) =>
    request(endpoint, { method: 'GET', params })

  const post = (endpoint: string, body: any) =>
    request(endpoint, { method: 'POST', body })

  const put = (endpoint: string, body: any) =>
    request(endpoint, { method: 'PUT', body })

  const del = (endpoint: string) =>
    request(endpoint, { method: 'DELETE' })

  return { get, post, put, del }
}
