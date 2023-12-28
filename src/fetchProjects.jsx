import { createClient } from 'contentful'
import { useEffect, useState } from 'react'
const client = createClient({
  space: 'r4d0bxwtta5o',
  accessToken: import.meta.env.VITE_API_KEY,
})

export const useFetchProject = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'title' })
      const newProjects = response.items.map((item) => {
        const { title, url, image, id } = item.fields
        const img = image?.fields?.file?.url
        return { title, url, img, id }
      })
      setIsLoading(false)
      setProjects(newProjects)
    } catch (error) {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return { isLoading, projects }
}
