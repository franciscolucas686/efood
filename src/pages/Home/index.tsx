import RestaurantList from '../../components/RestaurantList'
import Restaurant from '../../models/Restaurant'

const destaques: Restaurant[] = [
  {
    id: 1,
    image: '//placehold.it/472x250',
    title: 'Comida Carioca',
    category: 'Destaque da semana',
    info: 'Carioca',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ear blanditiis repellat suscipit atque veniam. Aut consequuntur ipsam assumenda amet ducimus! Sint aspernatur molestiae quis totam? Dolores soluta tenetur labore!'
  },
  {
    id: 2,
    image: '//placehold.it/472x250',
    title: 'Comida Mineira',
    category: 'Destaque da semana',
    info: 'Mineira',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ear blanditiis repellat suscipit atque veniam. Aut consequuntur ipsam assumenda amet ducimus! Sint aspernatur molestiae quis totam? Dolores soluta tenetur labore!'
  },
  {
    id: 3,
    image: '//placehold.it/472x250',
    title: 'Comida Holandesa',
    category: 'Destaque da semana',
    info: 'Holandesa',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ear blanditiis repellat suscipit atque veniam. Aut consequuntur ipsam assumenda amet ducimus! Sint aspernatur molestiae quis totam? Dolores soluta tenetur labore!'
  },
  {
    id: 4,
    image: '//placehold.it/472x250',
    title: 'Comida Americada',
    category: 'Destaque da semana',
    info: 'Americana',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ear blanditiis repellat suscipit atque veniam. Aut consequuntur ipsam assumenda amet ducimus! Sint aspernatur molestiae quis totam? Dolores soluta tenetur labore!'
  },
  {
    id: 5,
    image: '//placehold.it/472x250',
    title: 'Comida Noroeguesa',
    category: 'Destaque da semana',
    info: 'Noroeguesa',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ear blanditiis repellat suscipit atque veniam. Aut consequuntur ipsam assumenda amet ducimus! Sint aspernatur molestiae quis totam? Dolores soluta tenetur labore!'
  },
  {
    id: 6,
    image: '//placehold.it/472x250',
    title: 'Comida Canadense',
    category: 'Destaque da semana',
    info: 'Canadense',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ear blanditiis repellat suscipit atque veniam. Aut consequuntur ipsam assumenda amet ducimus! Sint aspernatur molestiae quis totam? Dolores soluta tenetur labore!'
  }
]

const Home = () => (
  <>
    <RestaurantList restaurants={destaques} />
  </>
)

export default Home
