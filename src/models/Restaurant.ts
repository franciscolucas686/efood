class Restaurant {
  id: number
  image: string
  title: string
  category: string
  info: string
  description: string

  constructor(
    id: number,
    image: string,
    title: string,
    category: string,
    info: string,
    description: string
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.category = category
    this.info = info
    this.description = description
  }
}

export default Restaurant
